import { getMembers } from './data';

export default function getChatLog() {
  return Promise.resolve(getMembers());
};