import { MembersList } from '../index';

const defaultProps = {
  items: [],
  showEmail: (f) => f,
  isShown: false,
};

describe('MembersList', () => {
  it('renders without crashing', () => {
    shallow(<MembersList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<MembersList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<MembersList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    return new Promise(resolve => setTimeout(resolve, 4000))
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<MembersList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should display an image', () => {
    return new Promise(resolve => setTimeout(resolve, 4000))
    const renderedItem = shallow(<MembersList {...defaultProps} />);
    console.log(renderedItem.html())
    expect(renderedItem.find('.members-image').length).toEqual(1);
  });
});
