import { DisableFieldsModule } from './disable-fields.module';

describe('DisableFieldsModule', () => {
  let disableFieldsModule: DisableFieldsModule;

  beforeEach(() => {
    disableFieldsModule = new DisableFieldsModule();
  });

  it('should create an instance', () => {
    expect(disableFieldsModule).toBeTruthy();
  });
});
