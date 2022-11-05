const errorMap = {
  OK: 200,
  BadRequest: 400,
  Unauthorized: 401,
  UnprocessableEntity: 422,
  NotFound: 404,
};

const mapError = (type: string): number => {
  if (type.includes('required')) return errorMap.BadRequest;
  if (type.includes('length')) return errorMap.UnprocessableEntity;
  if (type.includes('must')) return errorMap.UnprocessableEntity;
  
  return errorMap.OK;
}; 

export default mapError;