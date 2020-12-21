interface User {
    /**
     * The user's access token.
     */
    accessToken: string;

    /**
     * All of the domains.
     */
    domains: Array<{
        name: string;
        wildcard: boolean;
        donated: boolean;
        donatedBy: string;
        userOnly: boolean;
        dateAdded: Date;
    }>;

    /**
     * All of the images the user has uploaded.
     */
    images: Array<{
        link: string;
        dateUploaded: string;
        filename: string;
        size: string;
    }>;

    /**
     * All of the user's created invites.
     */
    createdInvites: Array<{
        _id: string;
        dateCreated: Date;
    }>;

    /**
     * The amount of storage the user has used.
     */
    storageUsed: string;

    /**
     * The user's uuid.
     */
    _id: string;

    /**
     * The user's uid.
     */
    uid: number;

    /**
     * The user's username.
     */
    username: string;

    /**
     * The user's invite code.
     */
    invite: string;

    /**
     * The user's upload key.
     */
    key: string;

    /**
     * The user's email.
     */
    email: string;

    /**
     * Whether or not the user's email is verified.
     */
    emailVerified: boolean;

    /**
     * The user's email verification key.
     */
    emailVerificationKey: string;

    /**
     * The user's discord id and avatar.
     */
    discord: {
        id: string;
        avatar: string;
    };

    /**
     * The number of strikes the user has.
     */
    strikes: number;

    /**
     * The user's blacklist status and reason.
     */
    blacklisted: {
        status: boolean;
        reason: string;
    };

    /**
     * The amount of files the user has uploaded.
     */
    uploads: number;

    /**
     * The amount of invites the user has.
     */
    invites: number;

    /**
     * The user that the user was invited by.
     */
    invitedBy: string;

    /**
     * The users that the user invited.
     */
    invitedUsers: string[];

    /**
     * The date that the user registered.
     */
    registrationDate: Date;

    /**
     * The last time the user logged in.
     */
    lastLogin: Date;

    /**
     * The user's testimonial.
     */
    testimonial: string;

    /**
     * The user's roles.
     */
    roles: string[];

    /**
     * The user's settings, their preferences, their domain, etc.
     */
    settings: {
        domain: {
            name: string;
            subdomain: string;
        };
        randomDomain: {
            enabled: boolean;
            domains: string[];
        },
        embed: {
            enabled: boolean;
            color: string;
            title: string;
            description: string;
            author: string;
            randomColor: boolean;
        };
        showLink: boolean;
        invisibleUrl: boolean;
        longUrl: boolean;
    };
}

interface IUserContext {
    /**
     * The user.
     */
    user: User;

    /**
     * Set the user.
     * @param {object} User the user.
     */
    setUser(user: User): void;
}

export {
    User,
    IUserContext
};
