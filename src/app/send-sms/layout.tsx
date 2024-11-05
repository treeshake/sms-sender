import { CenteredContainer } from "@treeshake/components/layouts/centered";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <CenteredContainer>{children}</CenteredContainer>;
}
