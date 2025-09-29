import { ForbiddenError } from '~/server/utils/errors';

export const mustBeRelatedToEntity = (sessionUserId?: string | null, recordUserId?: string | null | string[]) => {
  if (!sessionUserId) {
    throw ForbiddenError;
  }

  const checkAuthorization = (userId?: string | null) => {
    if (sessionUserId !== userId) {
      throw ForbiddenError;
    }
  };

  if (Array.isArray(recordUserId)) {
    if (!recordUserId.includes(sessionUserId)) {
      throw ForbiddenError;
    }
  } else {
    checkAuthorization(recordUserId);
  }
};
