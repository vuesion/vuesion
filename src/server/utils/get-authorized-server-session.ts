import type { Session } from 'next-auth';
import type { H3Event } from 'h3';
import { getServerSession } from '#auth';

interface AuthorizedSession extends Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const getAuthorizedServerSession = async (event: H3Event) => {
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.id) {
    throw NotAuthorizedError;
  }

  return session as AuthorizedSession;
};
