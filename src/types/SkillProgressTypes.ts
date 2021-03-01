/**
* スキルのプログレスバーのPropsの型定義
* @alias max? 上限。基本的に100%が上限なので100が入る
* @alias value どれくらいスキルが使えるか100%中の数字
* @alias colorScheme? 色情報
*/
export type SkillProgressProps = {
  max?: number;
  value: number;
  colorScheme?: string;
};