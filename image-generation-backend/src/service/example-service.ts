import { secureDatabase, executable, SquidService } from '@squidcloud/backend';
import { AiGenerateImageOptions } from '@squidcloud/client';

/**
 * Here you can define different backend functions that:
 * 1 - Can be called from the frontend
 * 2 - Can secure data access
 * 3 - Can be called as a trigger
 * 4 - Can define a webhook
 * 5 - Can be called as a scheduler
 * 6 - And more
 *
 * Note: This code will be executed in a secure environment and can perform any operation including database access,
 * API calls, etc.
 *
 * For more information and examples see: https://docs.squid.cloud/docs/development-tools/backend/
 */
export class ExampleService extends SquidService {
  // TODO: !!!IMPORTANT!!! - Replace this function with your own granular security rules
  @secureDatabase('all', 'built_in_db')
  allowAllAccessToBuiltInDb(): boolean {
    return true;
  }

  @executable()
  async generateImage(prompt: string): Promise<string | Error> {
    console.log(prompt);
    const options: AiGenerateImageOptions = {
      modelName: 'dall-e-3',
      quality: 'standard',
      size: '1024x1024',
      numberOfImagesToGenerate: 1,
    };

    return await this.squid
      .ai()
      .image('image-generation')
      .generate(prompt, options);
  }
}
