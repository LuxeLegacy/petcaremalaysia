import AuthorityHubRouter from './AuthorityHubRouter';
import { dogVomitingConfig } from '@/data/dog-vomiting';

const DogVomitingRouter = () => (
  <AuthorityHubRouter
    config={dogVomitingConfig}
    hubTitle={{
      en: 'Dog Vomiting & Diarrhea',
      ms: 'Anjing Muntah & Cirit-Birit',
      zh: '狗呕吐与腹泻',
    }}
  />
);

export default DogVomitingRouter;
