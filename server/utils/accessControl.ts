import { NotAuthorizedError } from '~/server/utils/errors';

export const mustBeRelatedToEntity = (sessionUserId?: string | null, recordUserId?: string | null | string[]) => {
  const checkAuthorization = (userId?: string | null) => {
    if (sessionUserId !== userId) {
      throw NotAuthorizedError;
    }
  };

  if (Array.isArray(recordUserId)) {
    if (!recordUserId.includes(sessionUserId || '')) {
      throw NotAuthorizedError;
    }
  } else {
    checkAuthorization(recordUserId);
  }
};
