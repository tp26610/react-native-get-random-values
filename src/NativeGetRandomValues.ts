import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  getRandomBase64(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('GetRandomValues');
