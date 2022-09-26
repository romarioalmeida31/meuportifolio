import Link from 'next/Link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface PropsNavLink {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: PropsNavLink) {
  const router = useRouter();

  const isActive = router.pathname === path;
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
