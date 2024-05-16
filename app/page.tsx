import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Survey from '@/components/survey/Survey';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Survey />
    </>
  );
}
