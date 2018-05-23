import { ResortWeather } from '../shared/ResortWeather';

describe('ResortWeather', () => {
  const defaultProps = {
    getWeather: () => {},
    currentWeather: fixture.weather,
    cityId: 7531846,
    isLoading: false,
    error: null,
  };

  const setup = buildSetup(ResortWeather, defaultProps);

  describe('component', () => {
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
  });

  describe('componentDidMount', () => {
    test('should call getWeather with appropriate argument', () => {
      const { props } = setup({ getWeather: jest.fn() });
      expect(props.getWeather).toHaveBeenCalledWith(7531846);
    });
  });
});
