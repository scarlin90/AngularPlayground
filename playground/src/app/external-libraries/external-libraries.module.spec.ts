import { ExternalLibrariesModule } from './external-libraries.module';

describe('ExternalLibrariesModule', () => {
  let externalLibrariesModule: ExternalLibrariesModule;

  beforeEach(() => {
    externalLibrariesModule = new ExternalLibrariesModule();
  });

  it('should create an instance', () => {
    expect(externalLibrariesModule).toBeTruthy();
  });
});
