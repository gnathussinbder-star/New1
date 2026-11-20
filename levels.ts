export type CEFR = 'A1'|'A2'|'B1'|'B2'|'C1';
export function levelFromPercent(percent: number): CEFR {
  if (percent < 30) return 'A1';
  if (percent < 45) return 'A2';
  if (percent < 60) return 'B1';
  if (percent < 75) return 'B2';
  return 'C1';
}
export const levelNames: Record<CEFR,{en:string;ar:string}> = {
  A1:{en:'Beginner',ar:'مبتدئ'},A2:{en:'Elementary',ar:'ابتدائي'},B1:{en:'Intermediate',ar:'متوسط'},B2:{en:'Upper Intermediate',ar:'فوق المتوسط'},C1:{en:'Advanced',ar:'متقدم'}
};
