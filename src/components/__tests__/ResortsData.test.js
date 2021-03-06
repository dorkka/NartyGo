import { ResortsData } from '../ResortsData';
import { resorts } from '../../specs/fixtures/resorts';

describe('ResortsData', () => {
  const defaultProps = {
    location: {
      search: '?page=6',
    },
    history: {
      push: jest.fn(),
    },
    match: {
      url: 'http://localhost:3000/',
    },
    resorts,
    getResorts: () => { },
    pageCount: 1,
    isLoading: false,
    error: null,
  };

  const setup = buildSetup(ResortsData, defaultProps, { lifecycleExperimental: true });

  describe('render component', () => {
    test('should render component', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render error message', () => {
      const { wrapper } = setup({ error: { message: 'test error' } });
      expect(wrapper).toMatchSnapshot();
    });

    test('should render loading in progress', () => {
      const { wrapper } = setup({ isLoading: true });
      expect(wrapper).toMatchSnapshot();
    });

    test('should render no data', () => {
      const { wrapper } = setup({ resorts: [] });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentDidMounnt', () => {
    // testing various options for learning porpose
    test('should call fetchResorts', () => {
      const { wrapper } = setup();
      const instance = wrapper.instance();
      instance.fetchResorts = jest.fn();
      instance.componentDidMount();
      expect(instance.fetchResorts).toHaveBeenCalled();
    });

    test('should call getResorts', () => {
      const { props } = setup({ getResorts: jest.fn() });
      expect(props.getResorts).toHaveBeenCalled();
    });

    test('should call getResorts with appropriate arguments', () => {
      const { props } = setup({ getResorts: jest.fn() });
      expect(props.getResorts).toHaveBeenCalledWith('6', 4);
    });

    test('should call getResorts with default page argument', () => {
      const { props } = setup({ getResorts: jest.fn(), location: { search: '' } });
      expect(props.getResorts).toHaveBeenCalledWith('1', 4);
    });
  });

  describe('commponentDidUpdate', () => {
    test('should call fetchResorts if search has changed', () => {
      const { wrapper } = setup();
      const instance = wrapper.instance();
      instance.fetchResorts = jest.fn();
      instance.componentDidUpdate({ location: { search: '?page=5' } });
      expect(instance.fetchResorts).toHaveBeenCalled();
    });

    test('should not call fetchResorts if search has not change', () => {
      const { wrapper, props } = setup();
      const instance = wrapper.instance();
      instance.fetchResorts = jest.fn();
      instance.componentDidUpdate(props);
      expect(instance.fetchResorts).not.toHaveBeenCalled();
    });
  });

  describe('handlePageClick', () => {
    test('should call push with appropriate argument', () => {
      const { wrapper, props } = setup();
      const instance = wrapper.instance();
      instance.handlePageClick({ selected: 3 });
      expect(props.history.push).toHaveBeenCalledWith('http://localhost:3000/?page=4');
    });
  });
});

