export const calcTotalPage = (totalCount: number, pageSize: number) => {
  if (!totalCount) return 0

  return Math.ceil(totalCount / pageSize)
}
