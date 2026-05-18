import AuthorityHubRouter from './AuthorityHubRouter';
import { dogSkinConfig } from '@/data/dog-skin';

const DogSkinRouter = () => (
  <AuthorityHubRouter
    config={dogSkinConfig}
    hubTitle={{
      en: 'Dog Skin Problems',
      ms: 'Masalah Kulit Anjing',
      zh: '狗皮肤问题',
    }}
  />
);

export default DogSkinRouter;
