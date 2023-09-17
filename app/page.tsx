'use client';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '@/stores/Context.store';
import { useRouter } from 'next/navigation';

const Home = observer(() => {
  const router = useRouter();
  const { userStore } = useAppStore();

  if (!userStore.user) {
    router.push('/auth');
    return null;
  }

  return <div>Home</div>;
});

export default Home;
