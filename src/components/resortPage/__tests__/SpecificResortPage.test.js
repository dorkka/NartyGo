import { SpecificResortPage } from '../SpecificResortPage';
import { resortId1 } from '../../../specs/fixtures/resorts';

describe('SpecificResortPage', () => {
  const defaultProps = {
    match: {
      params: {
        id: '1',
      },
    },
    getSpecificResort: () => { },
    resort: resortId1,
    isLoading: false,
    error: null,
  };

  const setup = buildSetup(SpecificResortPage, defaultProps, { lifecycleExperimental: true });

  describe('render component', () => {
    test('should render component', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render error message', () => {
      const { wrapper } = setup({ error: { message: 'test error' } });
      expect(wrapper).toMatchSnapshot();
    });

    test('should render loading in progres when isLoading is truthy', () => {
      const { wrapper } = setup({ isLoading: true });
      expect(wrapper).toMatchSnapshot();
    });

    test('should render loading in progres when cityId is falsy', () => {
      const { wrapper } = setup({ resort: { cityId: NaN } });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentDidMount', () => {
    test('should call getSpecificResort', () => {
      const { props } = setup({ getSpecificResort: jest.fn() });
      expect(props.getSpecificResort).toHaveBeenCalled();
    });

    test('should call getSpecificResort with appriopriate argument', () => {
      const { props } = setup({ getSpecificResort: jest.fn() });
      expect(props.getSpecificResort).toHaveBeenCalledWith('1');
    });
  });
});
