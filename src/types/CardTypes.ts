
export type CardProps = {
    fallbackSrc?: string;
}

export type WorkCardProps = CardProps & {
  image: string;
  appName: string;
  description: string;
  navigationLink: string;
};