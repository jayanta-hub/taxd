import { NavLinks } from '@/components/NavLinks/NavLinks';

export default function RootDashboard({ children }: { children: any }) {
  return (
    <>
      <NavLinks />
      <div>{children}</div>
    </>
  );
}
