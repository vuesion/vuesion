import { Session } from 'next-auth';

export const checkUserSession = (session: Session | null) => {
  if (!session || !session.user || !session.user.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'authentication required',
    });
  }
};

export const checkUserAuthorization = (sessionUserId?: string | null, recordUserId?: string | null) => {
  if (sessionUserId !== recordUserId) {
    throw createError({
      statusCode: 403,
      statusMessage: 'you are not authorized',
    });
  }
};
