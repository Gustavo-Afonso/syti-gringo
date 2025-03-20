import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Descrição da imagem"
        width={120} // Largura da imagem
        height={49} // Altura da imagem
      />
    </div>
  );
}