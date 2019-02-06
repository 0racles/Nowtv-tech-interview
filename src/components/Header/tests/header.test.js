import Header from '../index';

describe('Header', () => {
  it('should match snapshot', done => {
    setTimeout(done, 4000);
    const renderedItem = shallow(<Header />);
    expect(renderedItem).toMatchSnapshot();
  });
});
