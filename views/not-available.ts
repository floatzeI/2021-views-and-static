import apacheError from "./apache-error";

export default () => {
	return apacheError('Not Available', 'The requested feature is not available at this time.')
}