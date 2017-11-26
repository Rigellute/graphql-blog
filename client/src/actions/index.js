export const onUpdateField = field => {
  return {
    type: 'ON_UPDATE_FIELD',
    prop: field.prop,
    id: field.id,
    text: field.text,
  }
}
