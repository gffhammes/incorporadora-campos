import Link from "next/link";
import { ContainedSecondaryButton } from "../commons/Button";

export const ContactButton = () => {
  return (
    <Link href="/contato">
      <ContainedSecondaryButton>FALE CONOSCO</ContainedSecondaryButton>
    </Link>
  );
};
