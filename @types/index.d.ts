import 'react-redux';
import 'styled-components';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { StoreData } from '@redux/reducers';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends StoreData {}

  export type Operation<T> = ThunkAction<T, DefaultRootState, null, AnyAction>;
}

declare module 'redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): ReturnType<T>;
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // export interface DefaultTheme extends EFacilThemeTypes {}
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg?inline' {
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg' {
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.gif';
