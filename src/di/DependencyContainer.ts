export class DependencyContainer {
    public dependencies: { [key: string]: any } = {};

    register(key: string, value: any): void {
        if (!key || !value) {
            console.error('Key and value must be provided for registration.');
            throw new Error('Invalid registration');
        }
        if (this.dependencies.hasOwnProperty(key)) {
            console.warn(`Dependency with key '${key}' is already registered.`);
        }
        this.dependencies[key] = value;
        console.info(`Registered dependency with key '${key}'.`);
    }

    resolve<T>(key: string): T {
      console.log(this.dependencies)
        if (!this.dependencies.hasOwnProperty(key)) {
            console.error(`Dependency with key '${key}' is not registered.`);
            throw new Error('Dependency not found');
        }
        console.info(`Resolved dependency with key '${key}'.`);
        return this.dependencies[key];
    }
}


