export function notFound (resource = 'Item') {
  return {
    type: 'not_found',
    message: `${resource} não localizado(a)!`
  };
};

export function conflict (resource = 'Item') {
  return {
      type: 'conflict',
      message: `${resource} já existe!`
  };
};

export function invalidEntity (errors) {
  return {
    type: 'invalid_entity',
    message: errors
  };
};

export const errors = { notFound, conflict, invalidEntity }