// @flow

export const onUpdateField = (field: {
  prop: 'title' | 'body',
  id: string | number,
  text: string,
}) => {
  return {
    type: 'ON_UPDATE_FIELD',
    prop: field.prop,
    id: field.id,
    text: field.text,
  };
};
