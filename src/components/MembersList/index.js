import React, {Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate as id } from 'shortid';
import { showEmailAction } from '../../redux/Actions/emailAction';

const Block = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const StyledList = styled.li`
    list-style: none;

    &:nth-of-type(4) {
      order: 1;
    }

    &:nth-of-type(1) {
      order: 2;
    }

    &:nth-of-type(5) {
      order: 3;
    }

    &:nth-of-type(2) {
      order: 4;
    }

    &:nth-of-type(6) {
      order: 5;
    }
`;

const StyledImage = styled.img`
    margin-bottom: 1rem;
    max-width: 100px;
    order: 7;
`;

const formatTimestamp = (timestamp) => new Date(timestamp).toUTCString();

export const MembersList = ({ items, showEmail, isShown }) => { 
    return (
        <section>
            <Fragment>
                {items.length < 1 && <p id="items-missing">No members found.</p>}
                {items.map(
                    ({mem, messageId, userId, timestamp, message}) => {
                        return (
                            <Block key={id()}
                                className="itemsList-ul"
                            >
                                {mem &&  
                                    <Fragment key={id()}>
                                        <StyledList display="full-name">{` ${mem.firstName} ${mem.lastName}`}</StyledList>  
                                        <StyledList display="email">{isShown ? mem.email: null}</StyledList> 
                                        <StyledImage 
                                            onMouseOver={() => showEmail()}
                                            className="members-image" 
                                            src={mem.avatar ? mem.avatar : null}      
                                            alt="avatar" />
                                    </Fragment>
                                }
                                <StyledList display="message-id">{messageId}</StyledList> 
                                <StyledList display="user-id">{userId}</StyledList>
                                <StyledList display="time-stamp">{formatTimestamp(timestamp)}</StyledList>
                                <StyledList display="message">{message}</StyledList>
                            </Block>
                    )})
                }
            </Fragment>
        </section>
    );
};

MembersList.propTypes = {
    items: PropTypes.array.isRequired,
    showEmail: PropTypes.func.isRequired,
    isShown: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return { 
        items: state.members,
        isShown: state.isShown
    };
};

const mapDispatchToProps = (dispatch) => ({
    showEmail: () => dispatch(showEmailAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
