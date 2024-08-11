// injectable.ts
import { DependencyContainer } from './DependencyContainer';

const container = new DependencyContainer();

const singletonInstances: Map<string, any> = new Map();

export function injectable(instance: any) {
    container.register(instance.constructor.name, instance);
}

export function inject(dependencyKey: string) {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                // Assuming container.resolve returns an object with an `instance` property
                const resolvedDependency: any = container.resolve(dependencyKey);
                return resolvedDependency;
            },
            enumerable: true,
            configurable: true,
        });
    };
}