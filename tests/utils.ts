export function generatePlayFabResponse(
  data: any,
  status: string = "OK",
  code: number = 200
) {
  return {
    data,
    status,
    code,
  };
}
