export const dateHander = (time) => {
  const base = new Date(time)
  return `${base.getFullYear()}/${(base.getMonth()+1)}/${base.getDay()}`
}