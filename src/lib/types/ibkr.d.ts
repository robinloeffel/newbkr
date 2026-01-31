export interface paths {
    readonly "/acesws/{accountId}/signatures-and-owners": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List Account Signatures And Owners
         * @description Receive a list of all applicant names on the account and for which account and entity is represented.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An object containing valid accounts and the account properties regarding trading access. This endpoint is also used to confirm account validation. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["signatureAndOwners"];
                    };
                };
                /** @description bad request; accountId is empty */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/contract/trading-schedule": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Trading Schedule (NEW)
         * @description Returns the trading schedule for the 6 total days surrounding the current trading day. Non-Trading days, such as holidays, will not be returned.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conid: string;
                    readonly exchange?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the liquid and extended trading hours of the coming and prior trading days. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["scheduleResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/forecast/category/tree": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Event Contract Categories
         * @description Returns the category names, parent ids, and markets for Event Contracts.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a list of category identifiers and name to be used for more granular contract discovery. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["categoryTreeResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/forecast/contract/details": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Event Contract Details
         * @description Provides instrument details for the specific forecast contract.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conid: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the expanded list of the event contract containing both Yes and No side identifier information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["forecastDetailsResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/forecast/contract/market": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Provides All Contracts For Given Underlying Market.
         * @description Returns all high level contract details affiliated with the underlying market conid provided.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly underlyingConid: string;
                    readonly exchange?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the liquid and extended trading hours of the coming and prior trading days. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["forecastMarketResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/forecast/contract/rules": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Event Contract Rules
         * @description Provides trading rules for specific event contracts.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conid: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the corresponding contracts rules. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["forecastRulesResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/forecast/contract/schedules": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Event Contract Schedules
         * @description Provides forecast trading schedules.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conid: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the liquid and extended trading hours of the coming and prior trading days. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["forecastSchedulesResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/deliveryoptions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Delivery Options
         * @description Options for sending fyis to email and other devices.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully retrieve preset details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["deliveryOptions"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/deliveryoptions/device": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Toggle Delivery To A Device
         * @description Choose whether a particular device is enabled or disabled.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["fyiEnableDeviceOption"];
                };
            };
            readonly responses: {
                /** @description Successfully retrieve preset details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["fyiVT"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/deliveryoptions/email": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        /**
         * Toggle Email Delivery
         * @description Enable or disable your account's primary email to receive notifications.
         */
        readonly put: {
            readonly parameters: {
                readonly query: {
                    readonly enabled: unknown;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully enabled or disabled your email notifications. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["fyiVT"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/deliveryoptions/{deviceId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /**
         * Delete A Device
         * @description Delete a specific device from our saved list of notification devices.
         */
        readonly delete: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly deviceId: unknown;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description No response message is returned. Instead, you will only receive an empty string with a 200 OK status code indicating a successfully deleted account. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/disclaimer/{typecode}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Disclaimers By FYI Type
         * @description Receive additional disclaimers based on the specified typecode.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly typecode: components["schemas"]["typecodes"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully disclaimer details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["disclaimerInfo"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        /**
         * Mark FYI Disclaimer Read
         * @description Mark a specific disclaimer message as read.
         */
        readonly put: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly typecode: components["schemas"]["typecodes"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully marked as read */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["fyiVT"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/notifications": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Notifications
         * @description Get a list of available notifications.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly max: number;
                    readonly include?: unknown;
                    readonly exclude?: unknown;
                    readonly id?: unknown;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully enabled or disabled your email notifications. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["notifications"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/notifications/{notificationID}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        /**
         * Mark Notification Read
         * @description Mark a particular notification message as read or unread.
         */
        readonly put: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly notificationId: unknown;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully enabled or disabled your email notifications. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["notificationReadAcknowledge"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/settings": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Notification Settings
         * @description Return the current choices of subscriptions for notifications.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates data is being returned successfully. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["fyiSettings"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/settings/{typecode}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Modify FYI Notifications
         * @description Enable or disable group of notifications by the specific typecode.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly typecode: components["schemas"]["typecodes"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description the notification should be enabled or disabled. */
                        readonly enabled?: boolean;
                    };
                };
            };
            readonly responses: {
                /** @description Successfully retrieve preset details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["fyiVT"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/fyi/unreadnumber": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Number Of Unread Notifications
         * @description Returns the total number of unread notifications
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates data is being returned successfully. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /**
                             * Format: int32
                             * @description Returns the number of unread notifications.
                             */
                            readonly BN?: number;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description Return if called too frequently. Should not be called more than 1 time in 5 minutes */
                readonly 423: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            readonly status?: string;
                        };
                    };
                };
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Retrieve Processed Application
         * @description Retrieve the application request and IBKR response data based on IBKR accountId or externalId. Only available for accounts that originate via API<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly accountId?: string;
                    readonly externalId?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Retrieve the application request and IBKR response data based on IBKR accountId or externalId. Only available for accounts that originate via API */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["FileDetailsResponse"] | components["schemas"]["ResponseFileResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        /**
         * Create Account
         * @description Submit account application. This will create brokerage account for the end user.<br><br>**Scope**: `accounts.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/jwt": components["schemas"]["ApplicationPayload"];
                };
            };
            readonly responses: {
                /** @description Submit account application. This will create brokerage account for the end user. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["StatusResponse"];
                    };
                };
                /** @description Submit account application. This will initiate creation of brokerage account for the end user. */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["RequestInfoResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        /**
         * Update Account
         * @description Update information for an existing accountId<br><br>**Scope**: `accounts.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly patch: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/jwt": components["schemas"]["AccountManagementRequestsPayload"];
                };
            };
            readonly responses: {
                /** @description Update information for an existing accountId */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["StatusResponse"];
                    };
                };
                /** @description Initiate update information for an existing accountId. */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["RequestInfoResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/documents": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Submit General Agreements And Disclosures
         * @description Provides mechanism to submit Agreements and Disclosures to IBKR once a day instead of with each application. We store these documents on the servers and will use them for new application requests submitted that day.<ul><li>Documents will need to be submitted once a day (before the Applications are submitted). PDFs will be displayed and submitted as is- no changes/edits will be made to the actual PDF files.</li><li>This end-point will not process any Tax Form Documents. Tax Form document should be submitted with every application</li><li>If submitted in the morning, you only need to include the Tax Form attachment for each applicant. Otherwise, you will need to include PDFs with each application (Create Account).</li></ul><br><br>**Scope**: `accounts.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/jwt": components["schemas"]["ProcessDocumentsPayload"];
                };
            };
            readonly responses: {
                /** @description Submit standard agreements and disclosures */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["StatusResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/login-messages": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Login Messages
         * @description Query all accounts associated with ‘Client ID’ that have incomplete login message<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly loginMessageRequest: components["schemas"]["LoginMessageRequest"];
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Query all accounts associated with ‘Client ID’ that have incomplete login message */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["LoginMessageResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/status": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status Of Accounts
         * @description Query status of all accounts associated with ‘Client ID'<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly accountStatusRequest: components["schemas"]["AccountStatusRequest"];
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Query status of all accounts associated with ‘Client ID' */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AccountStatusBulkResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/{accountId}/details": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Account Information
         * @description <br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description View information associated with account including contact data, financial information and trading configuration. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AccountDetailsResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/{accountId}/kyc": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Retrieve Au10Tix URL
         * @description Generate URL address to complete real-time KYC verification using Au10Tix<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Generate URL address to complete real-time KYC verification using Au10Tix */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["Au10TixDetailResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/{accountId}/login-messages": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Login Message By Account
         * @description Query login messages assigned by accountId<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly type?: string;
                };
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Query login messages assigned by accountId */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["LoginMessageResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/{accountId}/status": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status By Account
         * @description Query status of account by accountId<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Query status of account by accountId. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AccountStatusResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/accounts/{accountId}/tasks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Registration Tasks
         * @description Query registration tasks assigned to account and pending tasks that are required for account approval<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly type?: "pending" | "registration";
                };
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Query registration tasks assigned to account and pending tasks that are required for account approval */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["RegistrationTasksResponse"] | components["schemas"]["PendingTasksResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/bank-instructions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Manage Bank Instructions
         * @description Create or delete bank instructions by accountId. Only ACH and EDDA are supported for 'Create'.<br><br>**Scope**: `bank-instructions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "ACH_INSTRUCTION" | "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION" | "DELETE_BANK_INSTRUCTION" | "PREDEFINED_DESTINATION_INSTRUCTION" | "EDDA_INSTRUCTION";
                        readonly instruction: components["schemas"]["TraditionalBankInstructionVerification"] | components["schemas"]["AchInstruction"] | components["schemas"]["DeleteBankInstruction"] | components["schemas"]["PredefinedDestinationInstruction"] | components["schemas"]["EddaInstruction"];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/bank-instructions/query": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * View Bank Instructions
         * @description View active bank instructions for an accountId.<br><br>**Scope**: `bank-instructions.read`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create get instruction name request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "QUERY_BANK_INSTRUCTION" | "QUERY_RECENT_RECURRING_EVENTS" | "QUERY_RECURRING_INSTRUCTIONS";
                        readonly instruction: components["schemas"]["QueryBankInstruction"] | components["schemas"]["QueryRecentRecurringEvents"] | components["schemas"]["QueryRecurringInstructions"];
                    };
                };
            };
            readonly responses: {
                /** @description Instruction successfully created and processed synchronously */
                readonly 201: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["QueryRecentRecurringEventResponse"] | components["schemas"]["QueryBankInstructionResponse"] | components["schemas"]["QueryRecurringInstructionsResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/bank-instructions:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple Banking Instructions(ach, Delete, Micro-amount, Predefined-destination-instruction)
         * @description <br>**Scope**: `bank-instructions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk Banking Instructions request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "ACH_INSTRUCTION" | "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION" | "DELETE_BANK_INSTRUCTION" | "PREDEFINED_DESTINATION_INSTRUCTION" | "EDDA_INSTRUCTION";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/client-instructions/{clientInstructionId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status For ClientInstructionId
         * @description Retrieve status of request by clientInstructionId.<br><br>**Scope**: `instructions.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                    /** @description The target instruction id. */
                    readonly clientInstructionId: components["parameters"]["clientInstructionIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the status of an instruction. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InstructionPollingResponse"] | components["schemas"]["InstructionResponse"] | components["schemas"]["QueryRecentInstructionResponse"] | components["schemas"]["DepositFundsPollingResponse"] | components["schemas"]["QueryIRAContributionsResponse"];
                    };
                };
                /** @description Client tried to reuse the same instructionId for more than one transaction. Returning the status for the first registered transaction under given instructionId (when there were no duplicates yet). Reconcile based on instructionSetId */
                readonly 208: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a not found request. */
                readonly 404: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["NoSuchInstructionResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/echo/https": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Echo A Request With HTTPS Security Policy Back After Validation.
         * @description <br>**Scope**: `echo.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a JSON object containing the request parameters. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["EchoResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/echo/signed-jwt": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Echo A Request With Signed JWT Security Policy Back After Validation.
         * @description <br>**Scope**: `echo.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: components["requestBodies"]["SignedJwtEchoRequestBody"];
            readonly responses: {
                /** @description Returns a JSON object containing the request parameters. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["EchoResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/enumerations/complex-asset-transfer": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get A List Of Participating Brokers For The Given Asset Type
         * @description Get list of brokers supported for given asset transfer type<br><br>**Scope**: `enumerations.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Asset transfer type to get the list of supported brokers */
                    readonly instructionType: string;
                };
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns list of brokers supported for given asset type */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetBrokerListResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a not found request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["NoSuchInstructionResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/enumerations/{enumerationType}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Enumerations
         * @description Used to query list of enumerations for attributes included within extPositionsTransfers, occupation, employerBusiness, financialInformation, affiliationDetails, tradingPermissions, etc.<br><br>**Scope**: `accounts.read` OR `enumerations.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly currency?: string;
                    readonly ibEntity?: string;
                    readonly mdStatusNonPro?: string;
                    readonly "form-number"?: string;
                    readonly language?: "en" | "ar" | "de" | "es" | "fr" | "he" | "hu" | "it" | "ja" | "nl" | "pt" | "ru" | "zh_CN" | "zh_TW";
                    readonly accountId?: string;
                    readonly userName?: string;
                };
                readonly header?: never;
                readonly path: {
                    readonly type: components["schemas"]["EnumerationType"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Get enumerations */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["EnumerationResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/external-asset-transfers": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Transfer Positions Externally (ACATS, ATON, FOP, DWAC, Complex Asset Transfer)
         * @description Initiate request to submit external position transfer. Methods- ACATS, ATON, Basic FOP, FOP, DWAC. More information on transfer methods can be found here - https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers/<br><br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "DWAC" | "FOP" | "COMPLEX_ASSET_TRANSFER" | "EXTERNAL_POSITION_TRANSFER";
                        readonly instruction: components["schemas"]["FopInstruction"] | components["schemas"]["DwacInstruction"] | components["schemas"]["ComplexAssetTransferInstruction"] | components["schemas"]["ExternalPositionTransfer"];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/external-asset-transfers:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple External Asset Transfers (Fop, DWAC And Complex Asset Transfer)
         * @description <br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk External Asset transfers (Fop, DWAC and Complex Asset Transfer) request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "DWAC" | "FOP" | "COMPLEX_ASSET_TRANSFER" | "EXTERNAL_POSITION_TRANSFER";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/external-cash-transfers": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Transfer Cash Externally
         * @description Initiate request to deposit or withdrawal between IBKR account and bank account. More information on transfer methods can be found here - https://www.interactivebrokers.com/campus/trading-lessons/cash-and-position-transfers<br><br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "DEPOSIT" | "WITHDRAWAL";
                        readonly instruction: components["schemas"]["DepositFundsInstruction"] | components["schemas"]["WithdrawFundsInstruction"];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/external-cash-transfers/query": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * View Cash Balances
         * @description View available cash for withdrawal with and without margin loan by accountId<br><br>**Scope**: `transfers.read`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create an external cash transfer query request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "QUERY_WITHDRAWABLE_FUNDS" | "QUERY_IRA_CONTRIBUTIONS";
                        readonly instruction: components["schemas"]["QueryWithdrawableFunds"] | components["schemas"]["QueryIRAContributions"];
                    };
                };
            };
            readonly responses: {
                /** @description Instruction successfully created and processed synchronously */
                readonly 201: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["QueryWithdrawableAmountsResponse"] | components["schemas"]["QueryWithdrawableAmountsWithoutOriginHoldResponse"];
                    };
                };
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/external-cash-transfers:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple External Cash Transfers (Deposit And Withdraw Fund)
         * @description <br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk External Cash transfers (Deposit and Withdraw fund) request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "DEPOSIT" | "WITHDRAWAL";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/forms": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Forms
         * @description Get forms<br><br>**Scope**: `accounts.read` OR `forms.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly formNo?: readonly number[];
                    readonly getDocs?: string;
                    readonly fromDate?: string;
                    readonly toDate?: string;
                    readonly language?: string;
                    readonly projection?: "PAYLOAD" | "DOCS" | "NONE";
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Get forms */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["FormFileResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/instruction-sets/{instructionSetId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status For InstructionSetId
         * @description Retrieve status of all requests associated with instructionSetId.<br><br>**Scope**: `instructions.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                    /** @description The target instruction set id. */
                    readonly instructionSetId: components["parameters"]["instructionSetIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the status multiple instructions. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a not found request. */
                readonly 404: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["NoSuchInstructionSetResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/instructions/cancel": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Cancel Request
         * @description Cancel request by instructionId.<br><br>**Scope**: `instructions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "CANCEL_INSTRUCTION";
                        readonly instruction: components["schemas"]["CancelInstruction"];
                    };
                };
            };
            readonly responses: {
                /** @description Instruction successfully created and processed synchronously */
                readonly 201: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["SynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/instructions/cancel:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple Cancel Instructions
         * @description <br>**Scope**: `instructions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk Cancel Instructions request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "CANCEL_INSTRUCTION";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/instructions/query": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Get Transaction History
         * @description Query list of recent transactions (up to 30 days) based on accountId.<br><br>**Scope**: `instructions.read`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create recent instructions request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "QUERY_RECENT_INSTRUCTIONS";
                        readonly instruction: components["schemas"]["QueryRecentInstructions"];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/instructions/{instructionId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status For InstructionId
         * @description Retrieve status of request by instructionId<br><br>**Scope**: `instructions.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                    /** @description The target instruction id. */
                    readonly instructionId: components["parameters"]["instructionIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the status of an instruction. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InstructionPollingResponse"] | components["schemas"]["InstructionResponse"] | components["schemas"]["QueryRecentInstructionResponse"] | components["schemas"]["DepositFundsPollingResponse"] | components["schemas"]["QueryIRAContributionsResponse"];
                    };
                };
                /** @description Client tried to reuse the same instructionId for more than one transaction. Returning the status for the first registered transaction under given instructionId (when there were no duplicates yet). Reconcile based on instructionSetId */
                readonly 208: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a not found request. */
                readonly 404: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["NoSuchInstructionResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/internal-asset-transfers": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Transfer Positions Internally
         * @description Transfer positions internally between two accounts with Interactive Brokers<br><br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "INTERNAL_POSITION_TRANSFER";
                        readonly instruction: components["schemas"]["InternalPositionTransferInstruction"];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/internal-asset-transfers:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple Internal Asset Transfers Between The Provided Account Id Pairs
         * @description <br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk Internal Asset Transfers request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "INTERNAL_POSITION_TRANSFER";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/internal-cash-transfers": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Transfer Cash Internally
         * @description Transfer cash internally between two accounts with Interactive Brokers.<br><br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "INTERNAL_CASH_TRANSFER";
                        readonly instruction: components["schemas"]["InternalCashTransferInstruction"];
                    };
                };
            };
            readonly responses: {
                /** @description Creates a new instruction synchronously, e.g., for Internal Cash Transfer w/o dateTimeToOccur */
                readonly 201: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["SynchronousInstructionResponse"];
                    };
                };
                /** @description Accepts request to create a new instruction asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ForbiddenInstructionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a business error. */
                readonly 422: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["BusinessRejectResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/internal-cash-transfers:bulk": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Creates Multiple Internal Cash Transfers Between The Provided Account Id Pairs
         * @description <br>**Scope**: `transfers.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            /** @description Create Bulk Internal Cash Transfers request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @enum {string} */
                        readonly instructionType: "INTERNAL_CASH_TRANSFER";
                        readonly instructions: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Accepts all instructions in Bulk request to create them asynchronously */
                readonly 202: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AsynchronousInstructionSetResponse"];
                    };
                };
                /** @description Some or all instructions are rejected, some (if any) are accepted for asynchronous creation */
                readonly 207: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["BulkMultiStatusResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. Returned even if only one instruction in the bulk upload has syntactical errors. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/participating-banks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Participating Banks
         * @description Get list of banks which support banking connection with Interactive Brokers.<br><br>**Scope**: `enumerations.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Parameter for which the list of participating banks is fetched */
                    readonly type: string;
                };
                readonly header?: never;
                readonly path: {
                    /** @description The client's clientId */
                    readonly "client-id": components["parameters"]["clientIdPathParam"];
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the list of participating banks. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetParticipatingListResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a not found request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["NoSuchInstructionResponse"];
                    };
                };
                /** @description Unable to process request due to an Internal Error. Please try again later. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/requests": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Requests' Details By Timeframe
         * @description Fetch Requests' Details By Timeframe<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly requestDetails: components["schemas"]["RequestDetailsRequest"];
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Fetch Requests' Details By Timeframe */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["RequestDetailsResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/requests/{requestId}/status": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Status Of A Request
         * @description Returns status for account management request<br><br>**Scope**: `accounts.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly type: "response" | "update";
                };
                readonly header?: never;
                readonly path: {
                    readonly requestId: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns status for account management request */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["AmRequestStatusResponse"] | components["schemas"]["StatusResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/sso-browser-sessions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create SSO Browser Session.
         * @description <br>**Scope**: `sso-browser-sessions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: components["requestBodies"]["CreateBrowserSessionRequestBody"];
            readonly responses: {
                /** @description Create a Single Sign On (SSO) to access the IBKR hosted portal (White Branded). */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["CreateBrowserSessionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/sso-sessions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create A New SSO Session On Behalf Of An End-user.
         * @description <br>**Scope**: `sso-sessions.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: components["requestBodies"]["CreateSessionRequestBody"];
            readonly responses: {
                /** @description Returns a JSON object containing a reference to the newly created SSO session. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["CreateSessionResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/statements": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Generates Statements In Supported Formats Based On Request Parameters.
         * @description <br>**Scope**: `statements.read` OR `statements.write` OR `reports.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            /** @description Report request object */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["StmtRequest"];
                };
            };
            readonly responses: {
                /** @description Returns a JSON object containing the relevant statement. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetStatementsResponse"];
                        readonly "application/pdf": string;
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/statements/available": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Fetch Available Daily, Monthly, And Annual Report Dates For An Account Id
         * @description <br>**Scope**: `statements.read` OR `reports.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Specifies the account id to retrieve information */
                    readonly accountId: components["parameters"]["AccountIdRequestParam"];
                };
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a JSON object containing the available report dates. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetAvailableStmtDatesResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/tax-documents": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Fetch Tax Forms In Supported Formats Based On Request Parameters.
         * @description <br>**Scope**: `statements.write` OR `reports.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            /** @description Tax Form request object */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["TaxFormRequest"];
                };
            };
            readonly responses: {
                /** @description Returns a JSON object containing the relevant Tax Form. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["TaxFormResponse"];
                        readonly "application/pdf": string;
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/tax-documents/available": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Fetch List Of Available Tax Reports/forms/documents For A Specified Account And Tax Year
         * @description <br>**Scope**: `statements.read` OR `reports.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Specifies the account id to retrieve information */
                    readonly accountId: components["parameters"]["AccountIdRequestParam"];
                    /** @description Specifies the tax year to retrieve information */
                    readonly year: components["parameters"]["TaxYearRequestParam"];
                };
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a JSON object containing the available report dates. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetAvailableTaxFormsResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/trade-confirmations": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Fetch Trade Confirmations In Supported Formats Based On Request Parameters.
         * @description <br>**Scope**: `statements.write` OR `reports.write`<br>**Security Policy**: `Signed JWT`
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            /** @description Trade confirmation request body */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["TradeConfirmationRequest"];
                };
            };
            readonly responses: {
                /** @description Returns a JSON object containing the relevant Trade Confirmation. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["TradeConfirmationResponse"];
                        readonly "application/pdf": string;
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/trade-confirmations/available": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Fetch List Of Available Trade Confirmation Dates, For A Specific Account Id
         * @description <br>**Scope**: `statements.read` OR `reports.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Specifies the account id to retrieve information */
                    readonly accountId: components["parameters"]["AccountIdRequestParam"];
                };
                readonly header: {
                    /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
                    readonly authorization: components["parameters"]["AuthorizationHeaderParam"];
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a JSON object containing the available user-traded dates. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["GetAvailableTradeConfirmationDatesResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a bad request. */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["MissingRequiredParameterResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InvalidAccessTokenResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an unauthorized request. */
                readonly 402: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["UnauthorizedAccessResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing a forbidden request. */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InsufficientScopeResponse"];
                    };
                };
                /** @description Returns a Problem detail instance representing an internal server error. */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["InternalServerErrorResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/gw/api/v1/validations/usernames/{username}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Verify User Availability
         * @description Verify whether user is valid and available<br><br>**Scope**: `accounts.read` OR `validations.read`<br>**Security Policy**: `HTTPS`
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly username: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Verify whether user is valid and available */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["UserNameAvailableResponse"];
                    };
                };
                /** @description Returns error description representing bad request */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 401: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Returns error description representing access issue */
                readonly 403: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
                /** @description Unsupported Media Type */
                readonly 415: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "*/*": {
                            readonly [key: string]: Record<string, never>;
                        };
                    };
                };
                /** @description Returns error description representing internal server error */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Switch Selected Account
         * @description Switch the active account for how you request data. Only available for financial advisors and multi-account structures.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description Identifier for the unique account to retrieve information from.
                         * @example U1234567
                         */
                        readonly acctId?: string;
                    };
                };
            };
            readonly responses: {
                /** @description Validates the account swapped to. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["setAccountResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description Internal Server Error. Unable to process request if incoming values are not valid. For example accountId is not correct */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["errorOnlyResponse"];
                    };
                };
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/alert/{alertId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Details Of A Specific Alert
         * @description Request details of a specific alert by providing the assigned alertId Id.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly type: "Q";
                };
                readonly header?: never;
                readonly path: {
                    readonly alertId: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An object containing all unique details of the specified alert. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alertDetails"];
                    };
                };
                /** @description bad request if orderId is empty or type is invalid */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description orderId is not parsable; unable to process request */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
                    };
                };
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/allocation/accounts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List Allocatable Subaccounts
         * @description Retrieves a list of all sub-accounts and returns their net liquidity and available equity for advisors to make decisions on what accounts should be allocated and how. This endpoint is only supported for Financial Advisors and IBroker Accounts.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates data is being returned successfully. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["subAccounts"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/allocation/group": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Allocation Groups
         * @description Retrieves a list of all of the advisor's allocation groups. This describes the name of the allocation group, number of subaccounts within the group, and the method in use for the group. This endpoint is only supported for Financial Advisors and IBroker Accounts.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the "data" array, which contains all allocation groups under the advisor account. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["allocationGroups"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        /**
         * Modify Allocation Group
         * @description Modify an existing allocation group.
         */
        readonly put: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description Name used to refer to your allocation group. If prev_name is specified, this will become the new name of the group.
                         * @example Group_1_NetLiq
                         */
                        readonly name: string;
                        /**
                         * @description Can be used to rename a group. Using this field will recognize the previous name, while the "name" filed will mark the updated name.
                         * @example Group_0_NetLiq
                         */
                        readonly prev_name?: string;
                        /** @description An array of accounts that should be held in the allocation group and, if using a User-specified allocaiton method, the value correlated to the allocation. */
                        readonly accounts: readonly unknown[];
                        readonly default_method: components["schemas"]["allocationMethod"];
                    };
                };
            };
            readonly responses: {
                /** @description Returns a confirmation that the modification was successful. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            readonly success?: boolean;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        /**
         * Add Allocation Group
         * @description Add a new allocation group. This group can be used to trade in place of the {accountId} for the /iserver/account/{accountId}/orders endpoint.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description Name used to refer to your allocation group. If prev_name is specified, this will become the new name of the group.
                         * @example Group_1_NetLiq
                         */
                        readonly name: string;
                        /** @description An array of accounts that should be held in the allocation group and, if using a User-specified allocaiton method, the value correlated to the allocation. */
                        readonly accounts: readonly unknown[];
                        readonly default_method: components["schemas"]["allocationMethod"];
                    };
                };
            };
            readonly responses: {
                /** @description Returns a confirmation that the modification was successful. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            readonly success?: boolean;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/allocation/group/delete": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Delete An Allocation Group
         * @description Deletes a previously created allocation group. This endpoint is only supported for Financial Advisors and IBroker Accounts.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description Name of an existing allocation group.
                         * @example Group_1_NetLiq
                         */
                        readonly name: string;
                    };
                };
            };
            readonly responses: {
                /** @description Returns a confirmation that the modification was successful. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            readonly success?: boolean;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/allocation/group/single": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Retrieve Single Allocation Group
         * @description Retrieves the configuration of a single account group.  This describes the name of the allocation group, the specific accounts contained in the group, and the allocation method in use along with any relevant quantities. This endpoint is only supported for Financial Advisors and IBroker Accounts.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description Name of an existing allocation group.
                         * @example Group_1_NetLiq
                         */
                        readonly name: string;
                    };
                };
            };
            readonly responses: {
                /** @description Returns details of the allocation group. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["allocationGroup"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/allocation/presets": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Retrieve Allocation Presets
         * @description Retrieve the preset behavior for allocation groups for specific events. This endpoint is only supported for Financial Advisors and IBroker Accounts.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully retrieve preset details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["presets"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        /**
         * Set Allocation Preset
         * @description Set the preset behavior for new allocation groups for specific events.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["presets"];
                };
            };
            readonly responses: {
                /** @description Successfully retrieve preset details */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Signifies that the request was successfully submitted. */
                            readonly success?: boolean;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/mta": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Details Of A Mobile Trading Alert
         * @description Retrieve information about your MTA alert. Each login user only has one mobile trading assistant (MTA) alert with it's own unique tool id that cannot be changed. MTA alerts can not be created or deleted, only modified. When modified a new order Id is generated.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description The alert description for the unique MTA alert on the account. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alertDetails"];
                    };
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/order/status/{orderId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Status Of A Single Order
         * @description Retrieve the status of a single order. Only displays orders from the current brokerage session. If orders executed on a previous day or session, queries will 503 error.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly orderId: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description order status */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderStatus"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/orders": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List Open Orders
         * @description Returns open orders and filled or cancelled orders submitted during the current brokerage session.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    /** @description Filter results using a comma-separated list of Order Status values. Also accepts a value to sort results by time. */
                    readonly filters?: "inactive" | "pending_submit" | "pre_submitted" | "submitted" | "filled" | "pending_cancel" | "cancelled" | "warn_state" | "sort_by_time";
                    /** @description Instructs IB to clear cache of orders and obtain updated view from brokerage backend. Response will be an empty array. */
                    readonly force?: boolean;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Orders for a specific account */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["liveOrdersResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/pnl/partitioned": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Profit And Loss
         * @description Returns updated profit and loss values for the selected account. Initial request will return an empty array in the upnl object.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Refers to "updated PnL". Holds a json object of key-value paired pnl details. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["pnlPartitionedResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/search/{searchPattern}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Dynamic Accounts
         * @description Returns a list of accounts matching a query pattern set in the request. Broker accounts configured with the DYNACCT property will not receive account information at login. Instead, they must dynamically query then set their account number. Customers without the DYNACCT property will receive a 503 error.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly searchPattern: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns all accounts that match the searchPattern string. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["dynAccountSearchResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/trades": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Trade History
         * @description Retrieve a list of trades, up to a maximum of 7 days prior.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    /** @description The number of prior days prior to include in response, up to a maximum of 7. If omitted, only the current day's executions will be returned. */
                    readonly days?: number;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description trades */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["tradesResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/alert": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create Or Modify Alert
         * @description Endpoint used to create a new alert, or modify an existing alert.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["alertCreationRequest"];
                };
            };
            readonly responses: {
                /** @description An object containing valid accounts and the account properties regarding trading access. This endpoint is also used to confirm account validation. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alertCreationResponse"];
                    };
                };
                /** @description bad request; body is empty */
                readonly 400: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description Internal Server Error. Unable to process request if incoming values are not valid. For example operator is "abc" Or if modification request contains unmodified fields */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["errorOnlyResponse"];
                    };
                };
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/alert/activate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Activate Or Deactivate An Alert
         * @description Activate or Deactivate existing alerts created for this account. This does not delete alerts, but disables notifications until reactivated.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["alertActivationRequest"];
                };
            };
            readonly responses: {
                /** @description An object containing details about the activated/deactivated alert. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alertActivationResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description Internal Server Error; unable to process incoming request due to invalid data in it */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["errorOnlyResponse"];
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/alert/{alertId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /**
         * Delete An Alert
         * @description Permanently delete an existing alert. Deleting an MTA alert will reset it to the default state.
         */
        readonly delete: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                    readonly alertId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": Record<string, never>;
                };
            };
            readonly responses: {
                /** @description An object containing details on the deleted endpoint. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alertDeletionResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                /** @description Internal Server Error; Unable to delete alert in case when provided alert id doesn't exist */
                readonly 500: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["errorOnlyResponse"];
                    };
                };
            };
        };
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/alerts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Alerts
         * @description Retrieve a list of all alerts attached to the provided account.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["alerts"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/order/{orderId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Modify Open Order
         * @description Modify an existing, unfilled order.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The account to which the order will clear. */
                    readonly accountId: string;
                    /** @description The IB-assigned order ID of the desired order ticket. */
                    readonly orderId: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["singleOrderSubmissionRequest"];
                };
            };
            readonly responses: {
                /** @description Status of submission */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderSubmitSuccess"] | components["schemas"]["orderSubmitError"] | components["schemas"]["orderReplyMessage"] | components["schemas"]["advancedOrderReject"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        /**
         * Cancel An Open Order
         * @description Cancel an existing, unfilled order.
         */
        readonly delete: {
            readonly parameters: {
                readonly query?: {
                    /** @description ExtOperator is used to identify external operator. */
                    readonly extOperator?: string;
                    /** @description For all orders for US Futures products, clients must submit this flag to indicate whether the order was originated manually (by a natural person) or automatically (by an automated trading system transmitting orders without human intervention). Submit a True value to indicate a manually originated order, and submit a False value to indicate an automated order. Orders for USFUT products that do not include this field will be rejected. */
                    readonly manualIndicator?: boolean;
                    /** @description Time of manual cancel. */
                    readonly manualCancelTime?: number;
                };
                readonly header?: never;
                readonly path: {
                    /** @description The account to which the order will clear. */
                    readonly accountId: string;
                    /** @description The IB-assigned order ID of the desired order ticket. */
                    readonly orderId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Status of submission */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderCancelSuccess"] | components["schemas"]["orderSubmitError"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/orders": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Submit New Order
         * @description Submit a new order(s) ticket, bracket, or OCA group.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The account to which the order will clear. */
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["ordersSubmissionRequest"];
                };
            };
            readonly responses: {
                /** @description Order submission response (success, error, reply is required or order reject) */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderSubmitSuccess"] | components["schemas"]["orderSubmitError"] | components["schemas"]["orderReplyMessage"] | components["schemas"]["advancedOrderReject"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/orders/whatif": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * New Order Preview
         * @description Preview the projected effects of an order ticket or bracket of orders, including cost and changes to margin and account equity.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The account to which the order will clear. */
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["ordersSubmissionRequest"];
                };
            };
            readonly responses: {
                /** @description Order Preview */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderPreview"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/summary": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Summary Of Account Values
         * @description Provides a general overview of the account details such as balance values.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Provides a general overview of the account details such as balance values. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["accountSummaryResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/summary/available_funds": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Summary Of Available Funds
         * @description Provides a summary specific for avilable funds giving more depth than the standard /summary endpoint.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates a successful return of available funds. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["availableFundsResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/summary/balances": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Summary Of Account Balances
         * @description Returns a summary of an account's equity and cash balances, in total and by account segment.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates a successful return of available funds. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["summaryOfAccountBalancesResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/summary/margins": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Summary Of Account Margin Usage
         * @description Returns a summary of an account's margin, in total and by account segment.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates a success request to receive margin balance values. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["summaryOfAccountMarginResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/account/{accountId}/summary/market_value": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Summary Of Account Market Value
         * @description Returns a summary of an account's market value, by currency and asset class.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates a successful market value request. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["summaryMarketValueResponse"];
                    };
                };
                readonly 400: components["responses"]["IServerAccountBadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/accounts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Tradable Accounts
         * @description Returns a list of accounts the user has trading access to, their respective aliases and the currently selected account. Note this endpoint must be called before modifying an order or querying open orders.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An object containing valid accounts and the account properties regarding trading access. This endpoint is also used to confirm account validation. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["userAccountsResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/auth/ssodh/init": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Initialize Brokerage Session
         * @description After retrieving the access token and subsequent Live Session Token, customers can initialize their brokerage session with the ssodh/init endpoint.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": components["schemas"]["brokerageSessionInitRequest"];
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        /**
                         * @example {
                         *       "success": {
                         *         "value": {
                         *           "authenticated": true,
                         *           "competing": false,
                         *           "connected": true,
                         *           "message": "",
                         *           "MAC": "98:F2:B3:23:BF:A0",
                         *           "serverInfo": {
                         *             "serverName": "JifN19053",
                         *             "serverVersion": "Build 10.25.0p, Dec 5, 2023 5:48:12 PM"
                         *           }
                         *         }
                         *       }
                         *     }
                         */
                        readonly "application/json": components["schemas"]["brokerageSessionStatus"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/auth/status": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Brokerage Session Status
         * @description Current Authentication status to the Brokerage system. Market Data and Trading is not possible if not authenticated.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Detailed status of the Brokerage session */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        /**
                         * @example {
                         *       "success": {
                         *         "value": {
                         *           "MAC": "12:B:B3:23:BF:A0",
                         *           "authenticated": true,
                         *           "competing": false,
                         *           "connected": true,
                         *           "hardware_info": "21026956|06:8E:04:45:DA:8F",
                         *           "message": "",
                         *           "serverInfo": {
                         *             "serverName": "JifN19053",
                         *             "serverVersion": "Build 10.25.0p, Dec 5, 2023 5:48:12 PM"
                         *           },
                         *           "fail": ""
                         *         }
                         *       }
                         *     }
                         */
                        readonly "application/json": components["schemas"]["brokerageSessionStatus"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/contract/rules": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Search Contract Rules
         * @description Returns trading related rules for a specific contract and side.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * Format: int32
                         * @description Contract identifier for the interested contract.
                         */
                        readonly conid: number;
                        /**
                         * @description Side of the market rules apply too. Set to true for Buy Orders, set to false for Sell orders.
                         * @default true
                         */
                        readonly isBuy?: boolean;
                        /**
                         * @description Used to find trading rules related to an existing order.
                         * @default false
                         */
                        readonly modifyOrder?: boolean;
                        /**
                         * Format: int32
                         * @description Specify the order identifier used for tracking a given order.
                         */
                        readonly orderId?: number;
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["contractRules"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/contract/{conid}/algos": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Algos For An Instrument
         * @description Returns supported IB Algos for an instrument. A pre-flight request must be submitted before retrieving information.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly algos?: "Adaptive" | "Vwap";
                    readonly addDescription?: 0 | 1;
                    readonly addParams?: 0 | 1;
                };
                readonly header?: never;
                readonly path: {
                    readonly conid: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a list of available algos and a description of their behavior. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["algosResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/contract/{conid}/info": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * General Instrument Information
         * @description Requests full contract details for the given conid.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly conid: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns detailed information for the passed contract. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["contractInfo"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/contract/{conid}/info-and-rules": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Instrument Info And Market Rules
         * @description Requests full contract details and trading rules for the given conid. A follow-up request will provide additional trading rules.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly conid: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns all contract information and trading rules for the contract. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["contractInfo"] & {
                            readonly rules?: components["schemas"]["contractRules"];
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/currency/pairs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Available Currency Pairs
         * @description Obtains available currency pairs corresponding to the given target currency.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly currency: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns a list of valid forex pairs for the given currency. The currency can apply as both the target or base currency. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["currencyPairs"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/dynaccount": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Set Active Dynamic Account
         * @description Set the active dynamic account.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description The account ID that should be set for future requests.
                         * @example U1234567
                         */
                        readonly acctId: string;
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["setAccountResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/exchangerate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Currency Exchange Rate
         * @description Obtains the exchange rates of the currency pair.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly target: string;
                    readonly source: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful requests return the currency exchange rate of the target currency value divided by the source currency. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Returns the exchange rate for the currency pair. */
                            readonly rate?: number;
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/marketdata/history": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Historical OHLC Bar Data
         * @description Request historical data for an instrument in the form of OHLC bars.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description IB contract ID of the requested instrument. */
                    readonly conid: number;
                    /**
                     * @description A time duration away from startTime into the future to be divided into bars of the specified width. Supported Period Sizes
                     *       * `min` - Minutes
                     *       * `h` - Hour(s)
                     *       * `d` - Day(s)
                     *       * `w` - Week(s)
                     *       * `m` - Month(s)
                     *       * `y` - Year(s)
                     */
                    readonly period: string;
                    /**
                     * @description The width of the bars into which the interval determined by period and startTime will be divided. It is not required that bar evenly divide period; partial bars can be returned. Supported Bar Sizes
                     *       * `S` - Second(s)
                     *       * `min` - Minute(s)
                     *       * `h` - Hour(s)
                     *       * `d` - Day(s)
                     *       * `w` - Week(s)
                     *       * `m` - Month(s)
                     */
                    readonly bar: string;
                    /** @description Exchange (or SMART) from which data is requested. */
                    readonly exchange?: string;
                    /** @description Indicates whether data outside of regular trading hours should be included in response. */
                    readonly outsideRth?: boolean;
                    /** @description A fixed UTC date-time reference point for the historical data request, from which the specified period extends. Format is YYYYMMDD-hh:mm:ss. If omitted, the current time is used, and direction must be omitted or 1. */
                    readonly startTime?: components["schemas"]["utcDateTime"];
                    /**
                     * @description Indicates whether data should begin or end at the start time.
                     *       * `-1` - Historical data will begin away from the start time, ending at the current time/startTime.
                     *       * `1` - Historical data begins at the start time, moving towards the current time. Only supported when startTime is included.
                     */
                    readonly direction?: -1 | 1;
                    /**
                     * @description The type of data to be returned in the historical bars. Supported Bar Sizes
                     *       * `Bid_Ask` - The OHLC bid/ask values.
                     *       * `Last` - The OHLC trade values.
                     *       * `Midpoint` - The OHLC of the Bid-Ask midpoint.
                     */
                    readonly source?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Historical data query successfully returned data. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["iserverHistoryBidAskResponse"] | components["schemas"]["iserverHistoryLastResponse"] | components["schemas"]["iserverHistoryMidpointResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/marketdata/snapshot": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Live Market Data Snapshot
         * @description Get Market Data for the given conid(s). A pre-flight request must be made prior to ever receiving data. For some fields, it may take more than a few moments to receive information. See response fields for a list of available fields that can be request via fields argument. The endpoint /iserver/accounts must be called prior to /iserver/marketdata/snapshot. For derivative contracts the endpoint /iserver/secdef/search must be called first.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conids: number;
                    readonly fields?: components["schemas"]["mdFields"];
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successfully requested market data */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["iserverSnapshot"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/marketdata/unsubscribe": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Close A Backend Data Stream
         * @description Instruct IServer to close its backend stream for the instrument when real-time snapshots are no longer needed.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * Format: int32
                         * @description The IB contract ID of the instrument whose market data feed is to be unsubscribed.
                         * @example 265598
                         */
                        readonly conid?: number;
                    };
                };
            };
            readonly responses: {
                /** @description Acknowledges a successful request */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /**
                             * @description The sole key 'success' will have boolean value true.
                             * @enum {boolean}
                             */
                            readonly success?: "true";
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/marketdata/unsubscribeall": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Close All Backend Data Streams
         * @description Instruct IServer to close all of its open backend data streams for all instruments.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Indicates a successful request to unsubscribe all streams. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /**
                             * @description The sole key 'unsubscribed' will have boolean value true.
                             * @enum {boolean}
                             */
                            readonly unsubscribed?: "true";
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/notification": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Dismiss Server Prompt
         * @description Respond to a server prompt received via ntf websocket message.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * Format: int32
                         * @description IB-assigned order identifier obtained from the ntf websocket message that delivered the server prompt.
                         * @example 987654321
                         */
                        readonly orderId?: number;
                        /**
                         * @description IB-assigned request identifier obtained from the ntf websocket message that delivered the server prompt.
                         * @example 12345
                         */
                        readonly reqId?: string;
                        /**
                         * @description The selected value from the "options" array delivered in the server prompt ntf websocket message.
                         * @example Yes
                         */
                        readonly text?: string;
                    };
                };
            };
            readonly responses: {
                /** @description Status of submitted prompt */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": string;
                    };
                };
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/questions/suppress": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Suppress Order Reply Messages
         * @description Suppress the specified order reply messages for the duration of the brokerage session.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description Array of order reply messageId identifier strings to be suppressed. */
                        readonly messageIds?: readonly ("o163" | "o354" | "o382" | "o383" | "o403" | "o451" | "o2136" | "o2137" | "o2165" | "o10082" | "o10138" | "o10151" | "o10152" | "o10153" | "o10164" | "o10223" | "o10288" | "o10331" | "o10332" | "o10333" | "o10334" | "o10335" | "o10336" | "p6" | "p12")[];
                    };
                };
            };
            readonly responses: {
                /** @description Request's status */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Confirms the successful suppression of specified messageIds. Always returns "Submitted". */
                            readonly status?: string;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/questions/suppress/reset": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Reset Order Reply Message Suppression
         * @description Removes suppression of all order reply messages that were previously suppressed in the current brokerage session.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Request's status */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Confirms the successful removal of suppression. Always returns "Submitted". */
                            readonly status?: string;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/reply/{replyId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Confirm Order Reply Message
         * @description Confirm an order reply message and continue with submission of order ticket.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    /** @description The UUID of the reply message to be confirmed, obtained from an order submission response. This is delivered from the POST /iserver/account/{accountId}/orders endpoint when triggering certain warning messages. */
                    readonly replyId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description Value of true answers the question in the affirmative and proceeds with order submission. */
                        readonly confirmed?: boolean;
                    };
                };
            };
            readonly responses: {
                /** @description Status of reply */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["orderSubmitSuccess"] | components["schemas"]["orderReplyMessage"] | components["schemas"]["orderSubmitError"] | components["schemas"]["advancedOrderReject"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/scanner/params": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Valid IServer Scanner Parameters
         * @description Returns an xml file containing all available parameters to be sent for the Iserver scanner request.
         */
        readonly get: operations["getScannerParameters"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/scanner/run": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Run An IServer Market Scanner
         * @description Searches for contracts according to the filters specified in /iserver/scanner/params endpoint.
         */
        readonly post: operations["getScannerResults"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/secdef/bond-filters": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Bond Filter Information
         * @description Request a list of filters relating to a given Bond issuerID. The issuerId is retrieved from /iserver/secdef/search and can be used in /iserver/secdef/info?issuerId={issuerId} for retrieving conIds.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly symbol: string;
                    readonly issuerId: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful requests return the currency exchange rate of the target currency value divided by the source currency. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["bondFiltersResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/secdef/info": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Instrument Attributes Detail
         * @description Returns the attributes of the instrument.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly conid?: string;
                    readonly sectype?: unknown;
                    readonly month?: unknown;
                    readonly exchange?: unknown;
                    readonly strike?: unknown;
                    readonly right?: "C" | "P";
                    readonly issuerId?: string;
                    readonly filters?: unknown;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["secDefInfoResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/secdef/search": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Instruments By Symbol
         * @description Returns a list of contracts based on the search symbol provided as a query param.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly symbol?: string;
                    /**
                     * @description Available underlying security types:
                     *       * `STK` - Represents an underlying as a Stock security type.
                     *       * `IND` - Represents an underlying as an Index security type.
                     *       * `BOND` - Represents an underlying as a Bond security type.
                     */
                    readonly secType?: "STK" | "IND" | "BOND";
                    readonly name?: boolean;
                    readonly more?: boolean;
                    readonly fund?: boolean;
                    readonly fundFamilyConidEx?: string;
                    readonly pattern?: boolean;
                    readonly referrer?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["secdefSearchResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        /**
         * Search Instruments By Symbol
         * @description Returns a list of contracts based on the search symbol provided as a query param.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /**
                         * @description The ticker symbol, bond issuer type, or company name of the equity you are looking to trade.
                         * @example AAPL
                         */
                        readonly symbol: string;
                        /**
                         * @description Available underlying security types:
                         *       * `STK` - Represents an underlying as a Stock security type.
                         *       * `IND` - Represents an underlying as an Index security type.
                         *       * `BOND` - Represents an underlying as a Bond security type.
                         * @default STK
                         * @enum {string}
                         */
                        readonly secType?: "STK" | "IND" | "BOND";
                        /** @description Denotes if the symbol value is the ticker symbol or part of the company's name. */
                        readonly name?: boolean;
                        readonly more?: boolean;
                        /** @description fund search */
                        readonly fund?: boolean;
                        readonly fundFamilyConidEx?: string;
                        /** @description pattern search */
                        readonly pattern?: boolean;
                        readonly referrer?: string;
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["secdefSearchResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/secdef/strikes": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Strikes For An Underlier
         * @description Returns lists of valid strikes for options contracts on a given underlier, for all currently trading expirations. The /iserver/secdef/search endpoint must be called prior for the underlying. Otherwise empty arrays will return for "puts" and "calls".
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conid: string;
                    readonly sectype: "OPT" | "FOP" | "WAR";
                    readonly month: string;
                    readonly exchange?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Array containing a series of comma separated values representing potential call strikes for the instrument. */
                            readonly call?: readonly number[];
                            /** @description Array containing a series of comma separated values representing potential put strikes for the instrument. */
                            readonly put?: readonly number[];
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/watchlist": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Return A Single Saved Watchlist
         * @description Retrieve details of a single watchlist stored in the username's settings.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    /** @description Watchlist ID of the requested watchlist. */
                    readonly id: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful deletion of specified watchlist. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["singleWatchlist"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        /**
         * Create A Watchlist
         * @description Create a named watchlist by submitting a set of conids.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            /** @description Watchlist contents. */
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description Must be a number, digits 0-9 only. Must be unique relative to other watchlist IDs. */
                        readonly id: string;
                        /** @description Arbitrary human-readable name to be displayed in TWS and Client Portal. */
                        readonly name: string;
                        /** @description Array of JSON objects corresponding to watchlist rows, one per instruments. */
                        readonly rows: readonly unknown[];
                    };
                };
            };
            readonly responses: {
                /** @description Watchlist creation successful. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description The submitted watchlist ID. */
                            readonly id?: string;
                            /** @description IB's internal hash of the submitted watchlist. */
                            readonly hash?: string;
                            /** @description The submitted human-readable watchlist name. */
                            readonly name?: string;
                            /** @description Indicates whether watchlist is write-restricted. User-created watchlists will always show false. */
                            readonly readOnly?: boolean;
                            /** @description Array will always be empty. Contents can be queried via GET /iserver/watchlist?id= */
                            readonly instruments?: readonly string[];
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        /**
         * Delete A Saved Watchlist
         * @description Delete a specified watchlist from the username's settings.
         */
        readonly delete: {
            readonly parameters: {
                readonly query: {
                    /** @description Watchlist ID of the watchlist to be deleted. */
                    readonly id: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful deletion of specified watchlist. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["watchlistDeleteSuccess"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/iserver/watchlists": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Return All Saved Watchlists
         * @description Returns all saved watchlists stored on IB backend for the username in use in the current Web API session.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    /** @description Can only be used with value USER_WATCHLIST, which returns only user-created watchlists and excludes those created by IB. */
                    readonly SC?: "USER_WATCHLIST";
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Historical data query successfully returned data. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["watchlistsResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/logout": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Terminate Web API Session
         * @description Logs the user out of the gateway session. Any further activity requires re-authentication. Discard client-side cookies upon logout.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Confirms that the logout action was performed successfully. */
                            readonly status?: boolean;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/oauth/access_token": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Generate An Access Token
         * @description Request an access token for the IB username that has granted authorization to the consumer.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: {
                    /** @description OAuth 1.0a authorization request header for request to /access_token endpoint. */
                    readonly Authorization?: string;
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Success response with permanent OAuth access token */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Indicates whether the authorizing username is paper or not. */
                            readonly is_true?: boolean;
                            /** @description Permanent OAuth access token for the consumer with respect to the authorizing username. 20 character hex value. */
                            readonly oauth_token?: string;
                            /** @description OAuth token secret value. Base64-encoded string. */
                            readonly oauth_token_secret?: string;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/oauth/live_session_token": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Generate A Live Session Token
         * @description Generate a Live Session Token shared secret and gain access to Web API.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: {
                    /** @description OAuth 1.0a authorization request header for request to /live_session_token endpoint. */
                    readonly Authorization?: string;
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Success response with Diffie-Hellman challenge and Signature value */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Diffie-Hellman challenge value used to compute live session token locally by client. */
                            readonly diffie_hellman_challenge?: string;
                            /** @description Signature value used to validate successful client-side computation of live session token. */
                            readonly live_session_token_signature?: string;
                            /**
                             * Format: int32
                             * @description Unix timestamp in milliseconds of time of live session token computation by IB. Live session tokens are valid for 24 hours from this time.
                             */
                            readonly live_session_token_expiration?: number;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/oauth/request_token": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Obtain A Request Token
         * @description Request a temporary token as a third party to begin the OAuth 1.0a authorization workflow.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: {
                    /**
                     * @description OAuth 1.0a authorization request header for request to /request_token endpoint.
                     * @example OAuth oauth_callback="oob",oauth_consumer_key="TESTCONS",oauth_nonce="b249...8f57",oauth_signature="41Sx%252...ZYZ2",oauth_signature_method="RSA-SHA256",oauth_timestamp="1714489440",realm="test_realm"
                     */
                    readonly Authorization?: string;
                };
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Success response with temporary OAuth access token */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Temporary OAuth access token. 20 character hex value. */
                            readonly oauth_token?: string;
                        };
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/oauth2/api/v1/token": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create Access Token
         * @description Generate OAuth 2.0 access tokens based on request parameters.
         */
        readonly post: operations["generateToken"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/pa/allperiods": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Account Performance (All Time Periods)
         * @description Returns the performance (MTM) for the given accounts, if more than one account is passed, the result is consolidated.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: {
                    readonly param?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description An array of strings containing each account identifier to retrieve performance details for. */
                        readonly acctIds?: readonly string[];
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["detailedContractInformation"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/pa/performance": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Account Performance
         * @description Returns the performance (MTM) for the given accounts, if more than one account is passed, the result is consolidated.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        /** @description An array of strings containing each account identifier to retrieve performance details for. */
                        readonly acctIds?: readonly unknown[];
                        /**
                         * @description Specify the period for which the account should be analyzed. Available period lengths:
                         *       * `1D` - The last 24 hours.
                         *       * `7D` - The last 7 full days.
                         *       * `MTD` - Performance since the 1st of the month.
                         *       * `1M` - A full calendar month from the last full trade day.
                         *       * `3M` - 3 full calendar months from the last full trade day.
                         *       * `6M` - 6 full calendar months from the last full trade day.
                         *       * `12M` - 12 full calendar month from the last full trade day.
                         *       * `YTD` - Performance since January 1st.
                         * @default 12M
                         * @enum {string}
                         */
                        readonly period?: "1D" | "7D" | "MTD" | "1M" | "3M" | "6M" | "12M" | "YTD";
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["performanceResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/pa/transactions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Transaction History
         * @description Transaction history for a given number of conids and accounts. Types of transactions include dividend payments, buy and sell transactions, transfers.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody: {
                readonly content: {
                    readonly "application/json": {
                        readonly acctIds?: readonly string[];
                        readonly conids?: readonly number[];
                        /**
                         * @description Define the currency to display price amounts with.
                         * @default USD
                         */
                        readonly currency?: string;
                        /**
                         * Format: int32
                         * @description Specify the number of days to receive transaction data for.
                         * @default 90
                         */
                        readonly days?: number;
                    };
                };
            };
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["transactionsResponse"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/accounts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Accounts
         * @description return accounts
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description returned array with user account */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": readonly components["schemas"]["accountAttributes"][];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/positions/{conid}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * All Account Positions In An Instrument
         * @description Get positions in accounts for a given instrument (no secDef await control)
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly conid: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Object containing positions in the requested conid broken out by account. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            readonly [key: string]: components["schemas"]["individualPosition"];
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/subaccounts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Subaccounts
         * @description Retrieve attributes of the subaccounts in the account structure.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Array of objects representing accounts in the structure. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": readonly components["schemas"]["accountAttributes"][];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/allocation": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Allocations
         * @description Get an account's allocations by asset class, sector group, and sector.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly model?: unknown;
                };
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description response with allocations */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["portfolioAllocations"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/ledger": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Ledger
         * @description Get the given account's ledger data detailing its balances by currency.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description ledger */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["ledger"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/meta": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Attributes
         * @description Get a single account's attributes and capabilities.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An account's attributes */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["accountAttributes"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/positions/invalidate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Refresh Position Cache
         * @description Instructs IB to discard cached portfolio positions for a given account, so that the next request for positions delivers freshly obtained data.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description status of invalidation */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": {
                            /** @description Indicates success or failure of request to discard cached positions. */
                            readonly message?: string;
                        };
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/positions/{pageId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Positions
         * @description Get all positions in an account.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    readonly model?: unknown;
                    readonly sort?: unknown;
                    readonly direction?: unknown;
                    readonly waitForSecDef?: boolean;
                };
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                    readonly pageId: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description positions */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": readonly components["schemas"]["individualPosition"][];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountId}/summary": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Portfolio Summary
         * @description Returns detailed summary of account values, by segment where appropriate.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description response with summary definitions */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["portfolioSummary"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/portfolio/{accountid}/position/{conid}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Account Position In An Instrument
         * @description Get position for a given instrument in a single account.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path: {
                    readonly accountId: string;
                    readonly conid: number;
                };
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Position details by conid */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["individualPositionArray"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/sso/validate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Validate SSO Web API Session
         * @description Validates the current session for the SSO user.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        /**
                         * @example {
                         *       "success": {
                         *         "value": {
                         *           "USER_ID": 123456789,
                         *           "USER_NAME": "user1234",
                         *           "RESULT": true,
                         *           "AUTH_TIME": 1702580846836,
                         *           "SF_ENABLED": false,
                         *           "IS_FREE_TRIAL": false,
                         *           "CREDENTIAL": "user1234",
                         *           "IP": "12.345.678.901",
                         *           "EXPIRES": 415890,
                         *           "QUALIFIED_FOR_MOBILE_AUTH": null,
                         *           "LANDING_APP": "UNIVERSAL",
                         *           "IS_MASTER": false,
                         *           "lastAccessed": 1702581069652,
                         *           "LOGIN_TYPE": 2,
                         *           "PAPER_USER_NAME": "user1234",
                         *           "features": {
                         *             "env": "PROD",
                         *             "wlms": true,
                         *             "realtime": true,
                         *             "bond": true,
                         *             "optionChains": true,
                         *             "calendar": true,
                         *             "newMf": true
                         *           },
                         *           "region": "NJ"
                         *         }
                         *       }
                         *     }
                         */
                        readonly "application/json": components["schemas"]["ssoValidateResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/tickle": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Brokerage Keep-Alive Ping
         * @description If the gateway has not received any requests for several minutes an open session will automatically timeout. The tickle endpoint pings the server to prevent the session from ending. It is expected to call this endpoint approximately every 60 seconds to maintain the connection to the brokerage session.
         */
        readonly post: {
            readonly parameters: {
                readonly query?: never;
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description An array of objects detailing contract information. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        /**
                         * @example {
                         *       "success": {
                         *         "value": {
                         *           "session": "bb665d0f55b6289d70bc7380089fc96f",
                         *           "ssoExpires": 460311,
                         *           "collission": false,
                         *           "userId": 123456789,
                         *           "hmds": {
                         *             "error": "no bridge"
                         *           },
                         *           "iserver": {
                         *             "authStatus": {
                         *               "authenticated": true,
                         *               "competing": false,
                         *               "connected": true,
                         *               "message": "",
                         *               "MAC": "98:F2:B3:23:BF:A0",
                         *               "serverInfo": {
                         *                 "serverName": "JifN19053",
                         *                 "serverVersion": "Build 10.25.0p, Dec 5, 2023 5:48:12 PM"
                         *               }
                         *             }
                         *           }
                         *         }
                         *       },
                         *       "fail": {
                         *         "value": {
                         *           "error": "failed to process request"
                         *         }
                         *       }
                         *     }
                         */
                        readonly "application/json": components["schemas"]["tickleResponse"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
            };
        };
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/trsrv/all-conids": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List All Stock Conids By Exchange
         * @description Send out a request to retrieve all contracts made available on a requested exchange. This returns all contracts that are tradable on the exchange, even those that are not using the exchange as their primary listing.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly exchange: string;
                    readonly assetClass?: unknown;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": readonly {
                            /** @description The ticker symbol of the contract. */
                            readonly ticker?: string;
                            /**
                             * Format: int32
                             * @description The contract identifier of the returned contract.
                             */
                            readonly conid?: number;
                            /** @description The primary exchange of the returned contract. */
                            readonly exchange?: string;
                        }[];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/trsrv/futures": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Futures By Symbol
         * @description Returns a list of non-expired future contracts for given symbol(s)
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly symbols: string;
                    readonly exchange?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["features"];
                    };
                };
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/trsrv/secdef": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Instrument Definition Detail
         * @description Returns a list of security definitions for the given conids.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly conids: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["trsrvSecDefResponse"];
                    };
                };
                readonly 204: components["responses"]["NoContent"];
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/trsrv/secdef/schedule": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Trading Schedule By Symbol
         * @description Returns the trading schedule up to a month for the requested contract.
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly assetClass: "STK" | "OPT" | "FUT" | "CFD" | "WAR" | "SWP" | "FND" | "BND" | "ICS";
                    readonly symbol: string;
                    readonly exchange?: string;
                    readonly exchangeFilter?: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Returns the trading schedule up to a month for the requested contract. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["tradingSchedule"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/trsrv/stocks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search Stocks By Symbol
         * @description Returns an object contains all stock contracts for given symbol(s)
         */
        readonly get: {
            readonly parameters: {
                readonly query: {
                    readonly symbols: string;
                };
                readonly header?: never;
                readonly path?: never;
                readonly cookie?: never;
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful response containing a contract's security definition. */
                readonly 200: {
                    headers: {
                        readonly [name: string]: unknown;
                    };
                    content: {
                        readonly "application/json": components["schemas"]["stocks"];
                    };
                };
                readonly 400: components["responses"]["BadRequest"];
                readonly 401: components["responses"]["Unauthorized"];
                readonly 500: components["responses"]["InternalServerError"];
                readonly 503: components["responses"]["ServiceUnavailable"];
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/ws": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Open Websocket
         * @description Open websocket.
         */
        readonly get: {
            readonly parameters: {
                readonly query?: {
                    /** @description Required for OAuth 2.0 users.  Query parameter defining Bearer Token to authorize connection. */
                    readonly bearer_token?: string;
                    /** @description Required when authroizing with OAuth 1.0a. 8-character OAuth access token. */
                    readonly oauth_token?: string;
                };
                readonly header: {
                    readonly Connection: "Upgrade";
                    readonly Upgrade: "websocket";
                };
                readonly path?: never;
                readonly cookie: {
                    /** @description 32-character Web API session cookie value. */
                    readonly api: string;
                };
            };
            readonly requestBody?: never;
            readonly responses: {
                /** @description Successful request to switch protocols. */
                readonly 101: {
                    headers: {
                        readonly Connection?: "Upgrade";
                        readonly Upgrade?: "websocket";
                        readonly [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        readonly ACHDetails: {
            readonly custInitAch?: boolean;
            readonly bankName?: string;
        };
        readonly AUSExposureDetailsType: {
            readonly ausExposureRelationship?: string;
            readonly personName?: string;
            /** Format: int32 */
            readonly licenseNumber?: number;
        };
        readonly AbandonAccount: {
            readonly accountId?: string;
        };
        readonly Account: {
            readonly accountConfiguration?: components["schemas"]["AccountConfigurationType"];
            readonly investmentObjectives?: readonly ("Trading" | "Growth" | "Speculation" | "Hedging" | "Preservation" | "Income")[];
            readonly brokerageServiceCodes?: readonly ("IBClearing" | "IBExecution" | "IBPrime")[];
            readonly capabilities?: readonly ("BOND" | "FOP" | "FUND" | "FUT" | "MRGN" | "MULT" | "OPT" | "SSF" | "CFD" | "STK" | "CLP" | "LEVFX" | "CMDTY")[];
            /** Format: int32 */
            readonly optionLevel?: number;
            readonly tradingPermissions?: readonly components["schemas"]["TradingPermission"][];
            readonly commissionConfigs?: readonly components["schemas"]["CommissionConfig"][];
            readonly allExchangeAccess?: readonly components["schemas"]["ExchangeAccess"][];
            readonly dvpInstructions?: readonly components["schemas"]["DVPInstruction"][];
            readonly tradingLimits?: components["schemas"]["TradingLimits"];
            readonly advisorWrapFees?: components["schemas"]["AdvisorWrapFeesType"];
            readonly feesTemplateName?: string;
            readonly clientCommissionSchedule?: components["schemas"]["CommissionScheduleType"];
            readonly clientInterestMarkupSchedules?: readonly components["schemas"]["InterestMarkupType"][];
            readonly decendent?: components["schemas"]["IRADecedent"];
            readonly iraBeneficiaries?: components["schemas"]["IRABeneficiariesType"];
            readonly extPositionsTransfers?: readonly components["schemas"]["ExtPositionsTransferType"][];
            readonly depositNotification?: components["schemas"]["DepositNotification"];
            readonly custodian?: components["schemas"]["CustodianType"];
            readonly successorCustodian?: components["schemas"]["CustodianType"];
            readonly accountRep?: components["schemas"]["AccountRep"];
            readonly id?: string;
            readonly externalId?: string;
            readonly propertyProfile?: string;
            /** @enum {string} */
            readonly baseCurrency?: "USD" | "EUR" | "GBP" | "CAD" | "JPY" | "HKD" | "AUD" | "CHF" | "MXN" | "SEK" | "NZD" | "HUF" | "CZK" | "CNH" | "DKK" | "RUB" | "ILS" | "NOK" | "SGD" | "PLN" | "ZAR" | "AED" | "KRW" | "SAR" | "TRY" | "RON" | "BGN";
            readonly employeePlan?: string;
            readonly multiCurrency?: boolean;
            readonly migration?: boolean;
            readonly sourceAccountId?: string;
            readonly margin?: string;
            readonly ira?: boolean;
            /** @enum {string} */
            readonly iraType?: "RI" | "RO" | "RT" | "SP" | "ED" | "TH" | "RH" | "SH" | "RRSP" | "SRRSP" | "TFSA" | "SIMPLE" | "ISA" | "JISA";
            readonly iraOfficialTitle?: string;
            readonly clientActiveTrading?: boolean;
            readonly duplicate?: boolean;
            /** Format: int32 */
            readonly numberOfDuplicates?: number;
            readonly stockYieldProgram?: boolean;
            readonly alias?: string;
            /** @enum {string} */
            readonly accountType?: "Investment" | "Trading" | "SMSF";
            readonly drip?: boolean;
        };
        readonly AccountClose: {
            readonly accountId?: string;
            readonly closeReason?: string;
        };
        readonly AccountConfiguration: {
            readonly accountId?: string;
            readonly type?: string;
            readonly value?: boolean;
        };
        readonly AccountConfigurationType: {
            readonly type?: string;
            readonly value?: boolean;
        };
        readonly AccountData: {
            readonly accountId?: string;
            readonly masterAccountId?: string;
            readonly mainAccount?: string;
            readonly sourceAccountId?: string;
            readonly primaryUser?: string;
            readonly clearingStatus?: string;
            readonly clearingStatusDescription?: string;
            readonly stateCode?: string;
            readonly baseCurrency?: string;
            readonly dateBegun?: string;
            readonly dateApproved?: string;
            readonly dateOpened?: string;
            readonly dateFunded?: string;
            readonly dateClosed?: string;
            readonly dateLinked?: string;
            readonly dateDelinked?: string;
            readonly accountTitle?: string;
            readonly officialTitle?: string;
            readonly accountAlias?: string;
            readonly emailAddress?: string;
            readonly margin?: string;
            readonly applicantType?: string;
            readonly subType?: string;
            readonly stockYieldProgram?: {
                readonly [key: string]: string;
            };
            readonly feeTemplate?: {
                readonly [key: string]: string;
            };
            readonly capabilities?: {
                readonly [key: string]: readonly string[];
            };
            readonly limitedOptionTrading?: string;
            readonly investmentObjectives?: readonly string[];
            readonly dividendReinvestment?: {
                readonly [key: string]: boolean;
            };
            readonly externalId?: string;
            readonly mifidCategory?: string;
            readonly mifirStatus?: string;
            /** Format: double */
            readonly equity?: number;
            readonly household?: string;
            readonly propertyProfile?: string;
            readonly processType?: string;
            /** Format: int32 */
            readonly riskScore?: number;
            readonly class_action_program?: string;
            readonly trustType?: string;
            readonly orgType?: string;
            readonly businessDescription?: string;
            readonly usTaxPurposeType?: string;
            readonly tradeIntentionType?: string;
            readonly registeredAddress?: {
                readonly [key: string]: string;
            };
            readonly mailing?: {
                readonly [key: string]: string;
            };
            readonly countryOfCorporation?: string;
            readonly taxIds?: readonly {
                readonly [key: string]: string;
            }[];
            readonly taxTreatyDetails?: readonly {
                readonly [key: string]: string;
            }[];
            readonly signatures?: readonly string[];
        };
        readonly AccountDetailsResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly account?: components["schemas"]["AccountData"];
            readonly associatedPersons?: readonly components["schemas"]["AssociatedPerson"][];
            readonly associatedEntities?: readonly components["schemas"]["AssociatedEntity"][];
            readonly withHoldingStatement?: {
                readonly [key: string]: string;
            };
            readonly marketData?: readonly {
                readonly [key: string]: string;
            }[];
            readonly financialInformation?: {
                readonly [key: string]: Record<string, never>;
            };
            readonly sourcesOfWealth?: readonly {
                readonly [key: string]: Record<string, never>;
            }[];
            readonly tradeBundles?: readonly string[];
            readonly individualIRABeneficiaries?: readonly components["schemas"]["IndividualIRABene"][];
            readonly entityIRABeneficiaries?: readonly components["schemas"]["EntityIRABene"][];
            readonly decedents?: readonly {
                readonly [key: string]: string;
            }[];
            readonly restrictions?: readonly components["schemas"]["RestrictionInfo"][];
        };
        readonly AccountManagementRequests: {
            readonly updateExternalId?: components["schemas"]["UpdateExternalId"];
            readonly updatePropertyProfile?: components["schemas"]["UpdatePropertyProfile"];
            readonly updateAccountAlias?: components["schemas"]["UpdateAccountAlias"];
            readonly changeBaseCurrency?: components["schemas"]["ChangeBaseCurrency"];
            readonly abandonAccount?: components["schemas"]["AbandonAccount"];
            readonly addNewUser?: components["schemas"]["AddNewUser"];
            readonly addLevFxCapability?: components["schemas"]["AddLEVFXCapability"];
            readonly addMiFirData?: components["schemas"]["AddMiFIRData"];
            readonly addTradingPermissions?: components["schemas"]["AddTradingPermissions"];
            readonly removeTradingPermissions?: components["schemas"]["RemoveTradingPermissions"];
            readonly changeMarginType?: components["schemas"]["ChangeMarginType"];
            readonly addCLPCapability?: components["schemas"]["AddCLPCapability"];
            readonly changeFinancialInformation?: components["schemas"]["ChangeFinancialInformation"];
            readonly resetAbandonedAccount?: components["schemas"]["ResetAbandonedAccount"];
            readonly updateCredentials?: components["schemas"]["UpdateCredentials"];
            readonly updateAccountRepresentatives?: components["schemas"]["UpdateAccountRepresentatives"];
            readonly completeLoginMessage?: components["schemas"]["CompleteLoginMessage"];
            readonly reopenAccount?: components["schemas"]["ReopenAccount"];
            readonly enrollInSyep?: components["schemas"]["EnrollInSYEP"];
            readonly leaveSyep?: components["schemas"]["LeaveSYEP"];
            readonly enrollInDrip?: components["schemas"]["EnrollInDRIP"];
            readonly leaveDrip?: components["schemas"]["LeaveDRIP"];
            readonly updateW8Ben?: components["schemas"]["UpdateW8BEN"];
            readonly enableAccountInBrokerage?: components["schemas"]["EnableAccountInBrokerage"];
            readonly disableAccountInBrokerage?: components["schemas"]["DisableAccountInBrokerage"];
            readonly linkDuplicateAccount?: components["schemas"]["LinkDuplicateAccount"];
            readonly duplicateAccount?: components["schemas"]["DuplicateAccount"];
            readonly documentSubmission?: components["schemas"]["DocumentSubmission"];
            readonly processDocuments?: components["schemas"]["ProcessDocuments"];
            readonly updateBcan?: components["schemas"]["UpdateBCAN"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaire"];
            readonly updateWithholdingStatement?: components["schemas"]["UpdateWithholdingStatement"];
            readonly accreditedInvestor?: components["schemas"]["AccreditedInvestor"];
            readonly changeAccountHolderDetail?: components["schemas"]["ChangeAccountHolderDetail"];
            readonly updateUserAccessRights?: components["schemas"]["UpdateUserAccessRights"];
            readonly informationChange?: components["schemas"]["InformationChange"];
            readonly addAdditionalAccount?: components["schemas"]["AddAdditionalAccount"];
            readonly accountConfiguration?: components["schemas"]["AccountConfiguration"];
            readonly allocateVan?: components["schemas"]["AllocateVAN"];
            readonly createUser?: components["schemas"]["CreateUser"];
            readonly updateTaxForm?: components["schemas"]["UpdateTaxForm"];
            readonly questionnaires?: components["schemas"]["Questionnaires"];
            readonly securityQuestions?: components["schemas"]["SecurityQuestions"];
            readonly applyFeeTemplate?: components["schemas"]["ApplyFeeTemplate"];
            readonly accountClose?: components["schemas"]["AccountClose"];
            readonly manageMarketDataSubscriptions?: components["schemas"]["ManageMarketDataSubscriptions"];
            readonly quizQuestionnaires?: components["schemas"]["QuizQuestionnaires"];
        };
        readonly AccountManagementRequestsPayload: {
            readonly accountManagementRequests?: components["schemas"]["AccountManagementRequests"];
        };
        readonly AccountRep: {
            readonly repDetails?: readonly components["schemas"]["RepDetail"][];
            readonly included?: boolean;
        };
        readonly AccountStatusBulkResponse: {
            readonly accounts?: readonly components["schemas"]["AccountStatusResponse"][];
            /** Format: int32 */
            readonly offset?: number;
            /** Format: int32 */
            readonly limit?: number;
            /** Format: int32 */
            readonly total?: number;
        };
        readonly AccountStatusRequest: {
            /** Format: date */
            readonly startDate: string;
            /** Format: date */
            readonly endDate: string;
            /** Format: int32 */
            readonly offset?: number;
            /** Format: int32 */
            readonly limit?: number;
            /** @enum {string} */
            readonly status?: "N" | "O" | "P" | "C" | "A" | "E" | "F" | "I" | "J" | "L" | "M" | "R" | "W" | "Q";
        };
        readonly AccountStatusResponse: {
            /** Format: date-time */
            readonly dateOpened?: string;
            /** Format: date-time */
            readonly dateStarted?: string;
            /** Format: date-time */
            readonly dateClosed?: string;
            readonly accountId?: string;
            readonly status?: string;
            readonly description?: string;
            readonly masterAccountId?: string;
            readonly adminAccountId?: string;
            readonly state?: string;
        };
        readonly AccountSupportType: {
            readonly businessDescription?: string;
            readonly primaryContributor?: components["schemas"]["PrimaryContributorType"];
            readonly administrator?: components["schemas"]["AdministratorType"];
            readonly administratorContactPerson?: components["schemas"]["AdministratorContactPersonType"];
            readonly ownersResideUS?: boolean;
            readonly solicitOwnersResideUS?: boolean;
            readonly acceptOwnersResideUS?: boolean;
            /** @enum {string} */
            readonly type?: "FINANCIALINSTITUTION" | "PROPRIETARYTRADING" | "FAMILYINVVEHICLE" | "OPERATINGBUSINESS" | "BROKERDEALER" | "LICENSEDADVISOR";
        };
        readonly AccreditedInvestor: {
            readonly qualifiedPurchaser?: components["schemas"]["QualifiedPurchaser"];
            readonly eligibleContractParticipant?: components["schemas"]["EligibleContractParticipant"];
            readonly signedBy?: readonly string[];
            readonly accountId?: string;
            readonly status?: boolean;
            readonly signature?: string;
        };
        readonly AccreditedInvestorInformation: {
            readonly q1?: boolean;
            readonly q2?: boolean;
            readonly q3?: boolean;
            readonly q4?: boolean;
            readonly q5?: boolean;
        };
        readonly AchInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example USACH
             * @enum {string}
             */
            readonly bankInstructionCode: "CAACH" | "USACH";
            /**
             * @example DEBIT_CREDIT
             * @enum {string}
             */
            readonly achType: "DEBIT" | "CREDIT" | "DEBIT_CREDIT";
            /** @example TestInstr */
            readonly bankInstructionName: string;
            /** @example USD */
            readonly currency: string;
            /** @example U223454 */
            readonly accountId: string;
            readonly clientAccountInfo: {
                /** @example 202012983 */
                readonly bankRoutingNumber: string;
                /** @example 101267576983 */
                readonly bankAccountNumber: string;
                /** @example JPM Chase */
                readonly bankName: string;
                /**
                 * @example 1
                 * @enum {number}
                 */
                readonly bankAccountTypeCode: "0" | "1" | "2";
            };
        };
        readonly AddAdditionalAccount: {
            readonly customer?: components["schemas"]["Customer"];
            readonly account?: components["schemas"]["Account"];
            readonly documents?: readonly components["schemas"]["Document"][];
            readonly users?: readonly components["schemas"]["User"][];
            readonly accountId?: string;
        };
        readonly AddCLPCapability: {
            readonly accountId?: string;
            readonly documents?: readonly components["schemas"]["Document"][];
        };
        readonly AddEntity: {
            readonly addRelationships?: readonly components["schemas"]["AddRelationship"][];
            readonly individual?: components["schemas"]["Individual"];
            readonly legalEntity?: components["schemas"]["LegalEntity"];
            readonly documents?: readonly components["schemas"]["Document"][];
        };
        readonly AddLEVFXCapability: {
            readonly accountId?: string;
        };
        readonly AddMiFIRData: {
            readonly accountId?: string;
            readonly title?: string;
            readonly identifications?: readonly components["schemas"]["Identification"][];
        };
        readonly AddNewUser: {
            readonly accountId?: string;
            readonly prefix?: string;
            readonly userDetails?: components["schemas"]["UserDetails"];
            readonly userName?: string;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
        };
        readonly AddRelationship: {
            /** @enum {string} */
            readonly name?: "Account_Holder" | "Spouse" | "Firstholder" | "Secondholder" | "Trader" | "Secretary" | "Treasurer" | "Ceo" | "Owner" | "Trustee" | "Beneficiary" | "Grantor" | "Director" | "Principal" | "Shareholder" | "Partner" | "Controlling_Officer" | "Beneficialowner" | "Signatory" | "Comp_Officer" | "Superv_Broker" | "Pooled_User" | "Financial_User" | "Contingent" | "Ira_Beneficiary" | "Employee" | "Non_Employee" | "Fund_Admin" | "Fund_Contact" | "Firm_Admin" | "Firm_Billing" | "Firm_Clearing" | "Firm_Sales" | "Firm_Trading" | "Firm_User" | "Account_Admin" | "Account_Billing" | "Account_Clearing" | "Account_Sales" | "Account_Trading" | "User_Individual" | "Fund_Manager" | "Investment_Advisor" | "Shf_Investmanager" | "Advisory_Principal" | "Advisory_Signatory" | "Associated_Fund" | "Primary_Contributor" | "Administrator" | "Contact" | "Lead_Compliance_Officer" | "Compliance_Officer" | "Other_Officer" | "Apply_User" | "Transfer_On_Death_Legator" | "Tod_Primary_Beneficiary" | "Tod_Contingent_Beneficiary" | "Nominee" | "Nominee_Guardian" | "Ira_Decedent" | "Authorized_Person" | "Promoter" | "Wholetime_Director" | "Nominee_Owner" | "Third_Party_Admin" | "Compliance_Contact" | "Trust_Controller" | "Trust_Applicant" | "Organization_Applicant" | "Mm_Contact" | "Reg_Rep" | "Plan_Sponsor" | "Plan_Sponsor_Officer" | "Pension_Admin" | "Pension_Admin_Contact" | "Accountant" | "Joint_Applicant" | "Custodian_Employee" | "Successor_Custodian" | "Custodian" | "Successor_Custodian_Employee" | "Chief_Compliance_Officer" | "Chief_Financial_Officer" | "Trading_Officer" | "Child" | "Parent" | "Sibling" | "Estate" | "As_Interest_May_Appear" | "Ira_Present_Trust" | "Other" | "Life_Partner" | "Common_Law_Partner" | "Grandchild" | "Charity" | "Trust_Ira" | "Successor_Holder" | "Head_Of_Desk" | "Cftc_Non_Applicant_Ocr_Contact" | "Ocr_Account_Controller" | "Cftc_Applicant_Ocr_Contact";
            /** Format: int32 */
            readonly ownershipPercentage?: number;
        };
        readonly AddTradingPermissions: {
            readonly tradingPermissions?: readonly components["schemas"]["TradingPermission"][];
            readonly documentSubmission?: components["schemas"]["DocumentSubmission"];
            readonly accountId?: string;
            /** Format: int32 */
            readonly optionLevel?: number;
        };
        readonly Address: {
            readonly street1?: string;
            readonly street2?: string;
            readonly city?: string;
            readonly state?: string;
            readonly country?: string;
            readonly postalCode?: string;
        };
        readonly AdministratorContactPersonType: {
            readonly firstName?: string;
            readonly middleInitial?: string;
            readonly lastName?: string;
            /** @enum {string} */
            readonly suffix?: "Jr." | "Sr." | "I" | "II" | "III" | "IV" | "V";
            readonly phoneNumber?: string;
        };
        readonly AdministratorType: {
            readonly firstName?: string;
            readonly middleInitial?: string;
            readonly lastName?: string;
            /** @enum {string} */
            readonly suffix?: "Jr." | "Sr." | "I" | "II" | "III" | "IV" | "V";
            readonly address?: components["schemas"]["Address"];
        };
        readonly AdvisorWrapFeesType: {
            readonly automatedFeesDetails?: readonly components["schemas"]["AutomatedWrapFeeDetailsType"][];
            readonly highWaterMarkConfigHwma?: components["schemas"]["HighWaterMarkType"];
            readonly highWaterMarkConfigHwmq?: components["schemas"]["HighWaterMarkType"];
            /** @enum {string} */
            readonly strategy?: "AUTOMATED" | "DIRECTBILLING" | "NO_FEE";
            readonly chargeAdvisor?: boolean;
            readonly chargeOtherFeesToAdvisor?: boolean;
        };
        readonly AffiliationDetailsType: {
            /** @enum {string} */
            readonly affiliationRelationship?: "Self" | "Spouse" | "Parent" | "Child" | "Other";
            readonly personName?: string;
            /** Format: int32 */
            readonly companyId?: number;
            readonly company?: string;
            readonly companyMailingAddress?: components["schemas"]["Address"];
            readonly companyPhone?: string;
            readonly companyEmailAddress?: string;
            readonly duplicateStmtRequired?: boolean;
        };
        readonly AgreementRevision: {
            readonly type: string;
        };
        readonly AllocateVAN: {
            readonly accountId?: string;
            /** @enum {string} */
            readonly currency?: "USD" | "EUR" | "GBP" | "CAD" | "JPY" | "HKD" | "AUD" | "CHF" | "MXN" | "SEK" | "NZD" | "HUF" | "CZK" | "CNH" | "DKK" | "RUB" | "ILS" | "NOK" | "SGD" | "PLN" | "ZAR" | "AED" | "KRW" | "SAR" | "TRY" | "RON" | "BGN";
            readonly countryCode?: string;
        };
        readonly AllowedScopeSet: {
            readonly scopes?: components["schemas"]["RegisteredScopeSet"];
        };
        readonly AmRequestStatusResponse: {
            readonly requestId?: string;
            readonly requestType?: string;
            readonly status?: string;
            readonly message?: string;
            readonly acctId?: string;
        };
        readonly AnnualBlendedPercentage: {
            readonly blendedFrom?: string;
            readonly blendedTo?: string;
            readonly percentage?: string;
        };
        readonly Answer: {
            readonly answerDetail?: readonly components["schemas"]["AnswerDetail"][];
            readonly detail?: string;
            /** Format: int32 */
            readonly id?: number;
            /** Format: int32 */
            readonly questionId?: number;
        };
        readonly AnswerDetail: {
            readonly name?: string;
            readonly detail?: string;
        };
        readonly AnswerResponse: {
            /** Format: int64 */
            readonly answerId?: number;
            readonly answer?: string;
            /** Format: int64 */
            readonly dependentQuestionId?: number;
            /** Format: int64 */
            readonly dependentAnswerId?: number;
            readonly multiAnswerDetail?: readonly string[];
        };
        readonly Application: {
            readonly customer?: components["schemas"]["Customer"];
            readonly accounts?: readonly components["schemas"]["Account"][];
            readonly users?: readonly components["schemas"]["User"][];
            readonly documents?: readonly components["schemas"]["Document"][];
            readonly additionalAccounts?: readonly components["schemas"]["AddAdditionalAccount"][];
            readonly masterAccountId?: string;
            readonly id?: string;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
            readonly paperAccount?: boolean;
        };
        readonly ApplicationPayload: {
            readonly application?: components["schemas"]["Application"];
        };
        readonly ApplyFeeTemplate: {
            readonly accountId?: string;
            readonly templateName?: string;
        };
        readonly ArrayNode: Record<string, never>;
        readonly AssetExperience: {
            /** @enum {string} */
            readonly assetClass?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            /** Format: int32 */
            readonly yearsTrading?: number;
            /** Format: int32 */
            readonly tradesPerYear?: number;
            /** @enum {string} */
            readonly knowledgeLevel?: "Extensive" | "Good" | "Limited" | "None";
        };
        readonly AssociatedEntities: {
            readonly associatedIndividuals?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly associatedEntities?: readonly components["schemas"]["AssociatedEntity"][];
        };
        readonly AssociatedEntity: {
            /** Format: int32 */
            readonly entityId?: number;
            readonly externalCode?: string;
            readonly name?: string;
            readonly email?: string;
            readonly organizationCountry?: string;
            readonly phones?: {
                readonly [key: string]: string;
            };
            readonly residence?: {
                readonly [key: string]: string;
            };
            readonly mailing?: {
                readonly [key: string]: string;
            };
            readonly associations?: readonly string[];
            readonly identityDocuments?: readonly {
                readonly [key: string]: string;
            }[];
            readonly taxTreatyDetails?: readonly {
                readonly [key: string]: string;
            }[];
            readonly AssociatedPersons?: readonly components["schemas"]["AssociatedPerson"][];
        };
        readonly AssociatedIndividual: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            readonly ownershipPercentage?: number;
            readonly titles?: readonly components["schemas"]["Title"][];
            readonly authorizedPerson?: boolean;
            readonly referenceUsername?: string;
        };
        readonly AssociatedPerson: {
            /** Format: int32 */
            readonly entityId?: number;
            readonly externalCode?: string;
            readonly firstName?: string;
            readonly middleName?: string;
            readonly middleInitial?: string;
            readonly lastName?: string;
            readonly suffix?: string;
            readonly username?: string;
            readonly passwordDate?: string;
            readonly userStatus?: string;
            readonly userStatusTrading?: string;
            readonly lastLogin?: string;
            readonly gender?: string;
            readonly maritalStatus?: string;
            readonly salutation?: string;
            readonly email?: string;
            readonly countryOfCitizenship?: string;
            readonly countryOfBirth?: string;
            readonly dateOfBirth?: string;
            readonly motersMaidenName?: string;
            /** Format: int32 */
            readonly numberOfDependents?: number;
            readonly securityDevice?: string;
            readonly commercial?: string;
            readonly countryOfLegalResidence?: string;
            readonly stateOfLegalResidence?: string;
            readonly mdSubscriberStatus?: string;
            readonly phones?: {
                readonly [key: string]: string;
            };
            readonly residence?: {
                readonly [key: string]: string;
            };
            readonly mailing?: {
                readonly [key: string]: string;
            };
            readonly associations?: readonly string[];
            readonly identityDocuments?: readonly {
                readonly [key: string]: string;
            }[];
            readonly employmentType?: string;
            readonly employmentDetails?: {
                readonly [key: string]: Record<string, never>;
            };
            readonly subscribedServices?: readonly {
                readonly [key: string]: Record<string, never>;
            }[];
            readonly taxTreatyDetails?: readonly {
                readonly [key: string]: string;
            }[];
        };
        readonly AssociationTypeEntities: {
            readonly individual?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly legalEntity?: readonly components["schemas"]["LegalEntity"][];
        };
        readonly AsynchronousInstructionResponse: components["schemas"]["InstructionResponse"];
        readonly AsynchronousInstructionSetResponse: {
            /**
             * Format: int32
             * @example 202
             */
            readonly status: number;
            /** @example -1988905739 */
            readonly instructionSetId: number;
            readonly instructionResults?: readonly {
                /**
                 * Format: int32
                 * @example 202
                 */
                readonly status: number;
                /** @example 9094 */
                readonly instructionSetId: number;
                readonly instructionResult: components["schemas"]["InstructionResult"];
            }[];
        };
        /**
         * @example {
         *       "fileName": "Form5001.pdf",
         *       "fileLength": 432177,
         *       "sha1Checksum": "03D899BA757F617C907A1F021D7046AC1DAC8707"
         *     }
         */
        readonly AttachedFileType: {
            /**
             * @description File name of the PDF document submitted to IBKR. fileName included within the documents request must match the fileName of the PDF file that is included within the signed request. <br> &bull;    Acceptable Formats: .jpeg, .jpg, .pdf, .png <br> &bull;    Max size: 10 MB
             * @example Form5001.pdf
             */
            readonly fileName: string;
            /**
             * Format: int32
             * @description Length of the PDF form
             * @example 432177
             */
            readonly fileLength: number;
            /**
             * @description SHA-1 is crypto algorithm that is used to verify that a file has been unaltered. This is done by producing a checksum before the file has been transmitted, and then once it reaches it's destination.
             * @example 03D899BA757F617C907A1F021D7046AC1DAC8707
             */
            readonly sha1Checksum: string;
        };
        readonly Au10TixDetailResponse: {
            /** Format: date-time */
            readonly startDate?: string;
            /** Format: date-time */
            readonly expiryDate?: string;
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly url?: string;
            readonly externalId?: string;
            /** Format: int32 */
            readonly entityId?: number;
            readonly state?: string;
        };
        readonly AuthorizationCode: {
            readonly code?: string;
            readonly hash?: string;
            readonly hash_algorithm?: string;
        };
        readonly AutomatedWrapFeeDetailsType: {
            readonly perTradeMarkups?: components["schemas"]["CommissionScheduleType"];
            readonly annualBlendedPercentages?: readonly components["schemas"]["AnnualBlendedPercentage"][];
            readonly navRanges?: readonly components["schemas"]["NAVRangeType"][];
            /** @enum {string} */
            readonly type?: "ANNUALFLATFEE" | "ANNUALFLATFEE_MONTHLY" | "ANNUALFLATFEE_QUATERLY" | "PERCENTOFEQUITY" | "PERCENTOFEQUITY_MONTHLY" | "PERCENTOFEQUITY_EOM" | "PERCENTOFEQUITY_QUATERLY" | "PERCENTOFEQUITY_QUARTERLY" | "PERCENTOFEQUITY_EOQ" | "BLENDEDPERCENTOFEQUITY" | "BLENDEDPERCENTOFEQUITY_MONTHLY" | "BLENDEDPERCENTOFEQUITY_EOM" | "BLENDEDPERCENTOFEQUITY_QUARTERLY" | "BLENDEDPERCENTOFEQUITY_EOQ" | "INVOICE_LIMIT" | "INVOICE_LIMIT_Q" | "PERCENTOFPROFIT" | "PERCENTOFPROFIT_QUARTER" | "PERTRADE" | "PERCENTOFNLV_CAP" | "PERCENTOFNLV_CAP_EOPEQTY" | "PERCENTOFNLV_CAP_Q" | "PERCENTOFNLV_CAP_EOPEQTY_Q";
            readonly maxFee?: number;
            /** Format: int32 */
            readonly numContracts?: number;
            readonly postFrequency?: string;
            readonly percentOfNLVCap?: string;
            readonly percentOfNLVCapQ?: string;
        };
        readonly AvailableStatementDatesData: {
            /** @example String */
            readonly dataType?: string;
            readonly value?: {
                readonly daily?: {
                    /** @description daily report start date */
                    readonly startDate?: string;
                    /** @description daily report end date */
                    readonly endDate?: string;
                };
                /** @description monthly available reports */
                readonly monthly?: readonly string[];
                /** @description annual available reports */
                readonly annual?: readonly string[];
            };
        };
        readonly AvailableTaxFormsData: {
            /** @example String */
            readonly dataType?: string;
            readonly value?: {
                /** @description available tax forms */
                readonly forms?: readonly components["schemas"]["TaxFormType"][];
            };
        };
        readonly Base64UrlString: {
            readonly empty?: boolean;
        };
        readonly BulkMultiStatusResponse: {
            /**
             * Format: int32
             * @example 207
             */
            readonly status: number;
            /** @example -1988905739 */
            readonly instructionSetId: number;
            readonly instructionResults?: readonly unknown[];
        };
        readonly BusinessRejectResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Business Error */
            readonly title: string;
            /**
             * Format: int32
             * @example 422
             */
            readonly status: number;
            /**
             * Format: int32
             * @example 8389943
             */
            readonly instructionSetId: number;
            readonly instructionResult?: components["schemas"]["InstructionErrorResult"];
        };
        readonly CancelInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example 43085477 */
            readonly instructionId: number;
            /** @example Testing */
            readonly reason: string;
        };
        readonly ChangeAccountHolderDetail: {
            readonly newAccountHolderDetails?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly documents?: components["schemas"]["DocumentSubmission"];
            readonly accountId?: string;
            readonly referenceUserName?: string;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
        };
        readonly ChangeBaseCurrency: {
            readonly accountId?: string;
            readonly newBaseCurrency?: string;
        };
        readonly ChangeFinancialInformation: {
            readonly accountId?: string;
            readonly referenceUserName?: string;
            readonly newFinancialInformation?: components["schemas"]["FinancialInformation"];
        };
        readonly ChangeMarginType: {
            readonly documentSubmission?: components["schemas"]["DocumentSubmission"];
            readonly accountId?: string;
            readonly newMargin?: string;
        };
        readonly CheckDetails: {
            readonly checkNumber?: string;
            readonly routingNumber?: string;
            readonly accountNumber?: string;
        };
        readonly ClientConfiguration: {
            /** @enum {string} */
            readonly account_selection_mode: "SINGLE" | "MULTIPLE";
            readonly filter: {
                readonly [key: string]: Record<string, never>;
            };
        };
        readonly ClientPublicKeySet: {
            /** @description Array of JSON Web Keys */
            readonly keys?: readonly (({
                /** @description RSA modulus */
                readonly n?: string;
                /** @description RSA exponent */
                readonly e?: string;
            } & {
                /**
                 * @description Key type
                 * @enum {string}
                 */
                readonly kty?: "RSA" | "EC" | "oct";
                /**
                 * @description Public key use
                 * @enum {string}
                 */
                readonly use?: "sig" | "enc";
                /** @description Key ID */
                readonly kid?: string;
                /** @description Algorithm */
                readonly alg?: string;
            }) | ({
                /** @description Elliptic curve */
                readonly crv?: string;
                /** @description X coordinate */
                readonly x?: string;
                /** @description Y coordinate */
                readonly y?: string;
            } & {
                /**
                 * @description Key type
                 * @enum {string}
                 */
                readonly kty?: "RSA" | "EC" | "oct";
                /**
                 * @description Public key use
                 * @enum {string}
                 */
                readonly use?: "sig" | "enc";
                /** @description Key ID */
                readonly kid?: string;
                /** @description Algorithm */
                readonly alg?: string;
            }) | ({
                /** @description Key value */
                readonly k?: string;
            } & {
                /**
                 * @description Key type
                 * @enum {string}
                 */
                readonly kty?: "RSA" | "EC" | "oct";
                /**
                 * @description Public key use
                 * @enum {string}
                 */
                readonly use?: "sig" | "enc";
                /** @description Key ID */
                readonly kid?: string;
                /** @description Algorithm */
                readonly alg?: string;
            }))[];
        };
        readonly CommissionConfig: {
            /** @enum {string} */
            readonly style?: "Bundled" | "Unbundled";
            /** @enum {string} */
            readonly type?: "Commodities" | "Securities";
        };
        readonly CommissionMarkupType: {
            readonly stairs?: readonly components["schemas"]["MarkupStaircaseType"][];
            readonly code?: string;
            readonly minimum?: number;
            readonly maximum?: number;
            /** @enum {string} */
            readonly type?: "FA" | "FM" | "PM";
            readonly amount?: number;
            readonly plusCost?: boolean;
            readonly ticketCharge?: number;
        };
        readonly CommissionScheduleType: {
            readonly markups?: readonly components["schemas"]["CommissionMarkupType"][];
            /** @enum {string} */
            readonly pricingStructure?: "FIXED" | "TIERED";
        };
        readonly CompleteLoginMessage: {
            readonly loginMessageIds?: readonly number[];
            readonly accountId?: string;
        };
        readonly ComplexAssetTransferInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example IN
             * @enum {string}
             */
            readonly direction: "IN" | "OUT";
            /** @example U46377 */
            readonly accountId: string;
            /** @example 7NXXXX0 */
            readonly accountIdAtCurrentBroker?: string;
            /** @example 1000 */
            readonly quantity: number;
            readonly tradingInstrument: components["schemas"]["TradingInstrument"];
            readonly contraBrokerInfo: components["schemas"]["ContraBrokerInfo"];
            readonly nonDisclosedDetail?: components["schemas"]["NonDisclosedDetail"];
        };
        readonly ComplexAssetTransferPollingResult: components["schemas"]["PollingInstructionResult"] & {
            readonly clearingState: string;
            readonly consolidatedComplexAssetTransferReport?: readonly {
                /**
                 * Format: int32
                 * @example 1
                 */
                readonly contractId?: number;
                readonly assetType?: string;
                readonly description?: string;
                readonly isin?: string;
                readonly symbol?: string;
                readonly quantity?: string;
                readonly status?: string;
            }[];
        };
        readonly Consent: {
            readonly consent_id?: string;
            /** @enum {string} */
            readonly consent_status?: "GRANTED" | "REVOKED";
            readonly client_id?: string;
            /** Format: int64 */
            readonly user_id?: number;
            readonly account_id?: string;
            readonly consented_scopes?: readonly string[];
            /** Format: date-time */
            readonly consented_at?: string;
        };
        readonly ContraBrokerInfo: {
            /** @example ORG */
            readonly accountType: string;
            /** @example JP MORGAN */
            readonly brokerName: string;
            /** @example 1234 */
            readonly depositoryId: string;
            /** @example as3456567678578N */
            readonly brokerAccountId: string;
            /** @example United States */
            readonly country: string;
            /** @example as */
            readonly contactName?: string;
            /** @example a@gmail.com */
            readonly contactEmail: string;
            /** @example 2039126155 */
            readonly contactPhone: string;
            /** @example Equatex U.S. Inc. For the Benefit of the Plan Participants of UBS AG */
            readonly accountTitle?: string;
        };
        readonly CounterpartyPermission: {
            readonly permission_name: string;
            readonly instruction_type_name?: string;
            /** @enum {string} */
            readonly permission_status?: "ACTIVE" | "INACTIVE" | "DISABLED" | "UNKNOWN";
        };
        readonly CreateBrowserSessionRequest: {
            /** @example ddowney2 */
            readonly credential: string;
            /** @example 10.10.10.10 */
            readonly ip: string;
        };
        readonly CreateBrowserSessionResponse: {
            readonly active?: boolean;
            /** @example https://www.interactivebrokers.com/sso/... */
            readonly url?: string;
        };
        readonly CreateSessionRequest: {
            /** @example ddowney2 */
            readonly credential: string;
            /** @example 10.10.10.10 */
            readonly ip: string;
            readonly service?: string;
            /**
             * @example [
             *       "10.10.10.11",
             *       "10.10.10.12"
             *     ]
             */
            readonly alternativeIps?: readonly string[];
        };
        readonly CreateSessionResponse: {
            readonly active?: boolean;
            /** @example eyJ0eXAiOiJKV1... */
            readonly access_token: string;
            /** @example Bearer */
            readonly token_type?: string;
        };
        readonly CreateUser: {
            readonly accountId?: string;
            readonly prefix?: string;
            readonly userName?: string;
            readonly id?: string;
            readonly externalId?: string;
            readonly authorizedTrader?: boolean;
        };
        readonly CustodianType: {
            readonly individual?: components["schemas"]["Individual"];
            readonly legalEntity?: components["schemas"]["LegalEntity"];
            readonly employee?: components["schemas"]["Individual"];
        };
        readonly Customer: {
            readonly organization?: components["schemas"]["OrganizationApplicant"];
            readonly accountHolder?: components["schemas"]["IndividualApplicant"];
            readonly jointHolders?: components["schemas"]["JointApplicant"];
            readonly trust?: components["schemas"]["TrustApplicant"];
            readonly id?: string;
            readonly externalId?: string;
            readonly transferUsMicroCapStock?: boolean;
            /** @enum {string} */
            readonly type?: "INDIVIDUAL" | "JOINT" | "TRUST" | "UGMA" | "UTMA" | "ORG" | "IRA";
            readonly prefix?: string;
            readonly userName?: string;
            readonly userNameAlias?: string;
            readonly userNameSource?: string;
            readonly email?: string;
            readonly mdStatusNonPro?: boolean;
            readonly preferredPrimaryLanguage?: string;
            readonly preferredSecondaryLanguage?: string;
            readonly legalResidenceCountry?: string;
            readonly taxTreatyCountry?: string;
            readonly meetAmlStandard?: string;
            readonly meetsAmlStandard?: string;
            readonly directTradingAccess?: boolean;
            readonly originCountry?: string;
            /** Format: int32 */
            readonly terminationAge?: number;
            readonly governingState?: string;
            readonly optForDebitCard?: boolean;
            readonly roboFaClient?: boolean;
            readonly independentAccount?: boolean;
            readonly paperAccount?: boolean;
        };
        readonly DVPInstruction: {
            readonly id?: string;
            readonly externalId?: string;
            readonly externalAccountID?: string;
            readonly accountID?: string;
            readonly name?: string;
            /** @enum {string} */
            readonly type?: "DTCID" | "NSCC" | "CMTA" | "GUS" | "OCCSSF";
            /** @enum {string} */
            readonly role?: "E" | "C" | "B";
            readonly agentID?: string;
            readonly firmID?: string;
            readonly agentName?: string;
            readonly accountName?: string;
            readonly dayDoID?: string;
            /** @enum {string} */
            readonly txGroupCode?: "G" | "Z" | "R" | "N";
            readonly brokerCode?: string;
            /** @enum {string} */
            readonly assetClass?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            /** @enum {string} */
            readonly exchange?: "NYSE" | "AMEX" | "NASDAQ" | "CBOE" | "ISE" | "BOX" | "PHLX" | "PSE";
            readonly prepayTax?: boolean;
            readonly prepayCommission?: boolean;
            /** Format: date */
            readonly expiry?: string;
            readonly default?: boolean;
        };
        readonly DayQuantityLimit: {
            /** @enum {string} */
            readonly asset?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            /** Format: int32 */
            readonly quantity?: number;
        };
        readonly DeleteBankInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
            /** @example Test-instruction */
            readonly bankInstructionName: string;
            /**
             * @example WIRE
             * @enum {string}
             */
            readonly bankInstructionMethod: "WIRE" | "ACH";
            /** @example USD */
            readonly currency: string;
        };
        readonly DeleteEntity: {
            /** Format: int32 */
            readonly ibEntityId?: number;
        };
        readonly DeleteRelationship: {
            /** @enum {string} */
            readonly name?: "Account_Holder" | "Spouse" | "Firstholder" | "Secondholder" | "Trader" | "Secretary" | "Treasurer" | "Ceo" | "Owner" | "Trustee" | "Beneficiary" | "Grantor" | "Director" | "Principal" | "Shareholder" | "Partner" | "Controlling_Officer" | "Beneficialowner" | "Signatory" | "Comp_Officer" | "Superv_Broker" | "Pooled_User" | "Financial_User" | "Contingent" | "Ira_Beneficiary" | "Employee" | "Non_Employee" | "Fund_Admin" | "Fund_Contact" | "Firm_Admin" | "Firm_Billing" | "Firm_Clearing" | "Firm_Sales" | "Firm_Trading" | "Firm_User" | "Account_Admin" | "Account_Billing" | "Account_Clearing" | "Account_Sales" | "Account_Trading" | "User_Individual" | "Fund_Manager" | "Investment_Advisor" | "Shf_Investmanager" | "Advisory_Principal" | "Advisory_Signatory" | "Associated_Fund" | "Primary_Contributor" | "Administrator" | "Contact" | "Lead_Compliance_Officer" | "Compliance_Officer" | "Other_Officer" | "Apply_User" | "Transfer_On_Death_Legator" | "Tod_Primary_Beneficiary" | "Tod_Contingent_Beneficiary" | "Nominee" | "Nominee_Guardian" | "Ira_Decedent" | "Authorized_Person" | "Promoter" | "Wholetime_Director" | "Nominee_Owner" | "Third_Party_Admin" | "Compliance_Contact" | "Trust_Controller" | "Trust_Applicant" | "Organization_Applicant" | "Mm_Contact" | "Reg_Rep" | "Plan_Sponsor" | "Plan_Sponsor_Officer" | "Pension_Admin" | "Pension_Admin_Contact" | "Accountant" | "Joint_Applicant" | "Custodian_Employee" | "Successor_Custodian" | "Custodian" | "Successor_Custodian_Employee" | "Chief_Compliance_Officer" | "Chief_Financial_Officer" | "Trading_Officer" | "Child" | "Parent" | "Sibling" | "Estate" | "As_Interest_May_Appear" | "Ira_Present_Trust" | "Other" | "Life_Partner" | "Common_Law_Partner" | "Grandchild" | "Charity" | "Trust_Ira" | "Successor_Holder" | "Head_Of_Desk" | "Cftc_Non_Applicant_Ocr_Contact" | "Ocr_Account_Controller" | "Cftc_Applicant_Ocr_Contact";
        };
        readonly DepositFundsInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U46377 */
            readonly accountId: string;
            /** @example USD */
            readonly currency: string;
            /** @example 100 */
            readonly amount: number;
            /**
             * @example WIRE
             * @enum {string}
             */
            readonly bankInstructionMethod: "ACH" | "WIRE" | "eDDA" | "OPEN_BANKING";
            readonly openBanking?: {
                /**
                 * @example PLAID
                 * @enum {string}
                 */
                readonly serviceProvider: "PLAID";
                readonly plaidOptions?: {
                    /**
                     * @description This should be a URI with a custom scheme and this can be any value you'd like, as long as it isn't a reserved one such as http or tel. By convention, it's often one associated with the name of your application.
                     * @example wonderwallet://hosted-link-complete
                     */
                    readonly completionRedirectUri?: string;
                    /**
                     * @description Client Name displayed on Plaid Link UI
                     * @example WonderWallet
                     */
                    readonly linkDisplayName?: string;
                    readonly isMobileApp?: boolean;
                };
            };
            /** @example Sending Institution name */
            readonly sendingInstitution?: string;
            /** @example identifier */
            readonly identifier?: string;
            /** @example U46377 */
            readonly specialInstruction?: string;
            /** @example Instruction */
            readonly bankInstructionName?: string;
            /** @example Senders Institution name */
            readonly senderInstitutionName?: string;
            readonly iraDepositDetail?: {
                /**
                 * @example ROLLOVER
                 * @enum {string}
                 */
                readonly iraContributionType: "ROLLOVER" | "LATE_ROLLOVER" | "DIRECT_ROLLOVER" | "CONTRIBUTION" | "SPOUSAL_CONTRIBUTION" | "EMPLOYER_SEP_CONTRIBUTION";
                /**
                 * @example CURRENT
                 * @enum {string}
                 */
                readonly iraTaxYearType: "CURRENT" | "PRIOR";
                /**
                 * @example TRADITIONAL
                 * @enum {string}
                 */
                readonly fromIraType: "NONE" | "TRADITIONAL" | "ROLLOVER" | "ROTH" | "SEP" | "EDUCATION" | "TRADITIONAL_INHERITED" | "ROTH_INHERITED" | "SEP_INHERITED" | "RETIREMENT_SAVING_PLAN" | "SPOUSAL_RETIREMENT_SAVING_PLAN" | "TAX_FREE_SAVING_ACCOUNT";
            };
            readonly recurringInstructionDetail?: components["schemas"]["RecurringInstructionDetail"];
        };
        readonly DepositFundsPollingResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["DepositFundsPollingResult"];
        };
        readonly DepositFundsPollingResult: components["schemas"]["PollingInstructionResult"] & {
            readonly depositDetails?: {
                readonly amount?: number;
                readonly currency?: string;
                readonly whenAvailable?: string;
                readonly openBanking?: {
                    readonly serviceProvider?: string;
                    readonly providerResponse?: Record<string, never>;
                };
            };
        };
        readonly DepositNotification: {
            readonly checkDetails?: components["schemas"]["CheckDetails"];
            readonly wireDetails?: components["schemas"]["WireDetails"];
            readonly achDetails?: components["schemas"]["ACHDetails"];
            readonly iraDepositDetails?: components["schemas"]["IRADepositDetails"];
            /** @enum {string} */
            readonly type?: "CHECK" | "WIRE" | "ACH" | "SKIP_DEPOSIT";
            readonly amount?: number;
            /** @enum {string} */
            readonly currency?: "USD" | "EUR" | "GBP" | "CAD" | "JPY" | "HKD" | "AUD" | "CHF" | "MXN" | "SEK" | "NZD" | "HUF" | "CZK" | "CNH" | "DKK" | "RUB" | "ILS" | "NOK" | "SGD" | "PLN" | "ZAR" | "AED" | "KRW" | "SAR" | "TRY" | "RON" | "BGN";
            readonly ibAccount?: string;
        };
        readonly Details: {
            readonly question?: string;
            readonly answer?: string;
        };
        /** @deprecated */
        readonly DisableAccountInBrokerage: {
            readonly accountId?: string;
        };
        readonly Document: {
            /**
             * @description signedBy must match the submitted: name (first + middle initial (if applicable) + last).<br/>*Data is case and space sensitive.<br/>Object is required if submitting documents for the following endpoints: <br/><ul><li>Client Registration: [POST]: https://api.ibkr.com/gw/api/v1/accounts</li><li>Updating Account Information: [PATCH] https://api.ibkr.com/gw/api/v1/account</li></ul>
             * @example Jane L Doe
             */
            readonly signedBy?: readonly string[];
            readonly attachedFile: components["schemas"]["AttachedFileType"];
            /**
             * Format: int32
             * @description Form number of the pendingTask OR Document submitted.
             */
            readonly formNumber: number;
            /** @description If Driver License is provided as proofOfIdentityType AND validAddress=true, single document can be used to satisfy Proof of Identity and Proof of Address. */
            readonly validAddress?: boolean;
            /**
             * Format: int32
             * @description Login timestamp for the session (when the client logged in and acknowledged the agreement).
             * @example -1186971863
             */
            readonly execLoginTimestamp: number;
            /**
             * Format: int32
             * @description Timestamp of the execution of the agreement by the customer (i.e. the time that the client signed the agreement).
             * @example -1186971863
             */
            readonly execTimestamp: number;
            /**
             * @description Acceptable documents will vary based on the formNumber.
             * @example Brokerage Statement
             * @enum {string}
             */
            readonly documentType?: "Check" | "Company Ownership" | "Divorce Settlement" | "Employer Confirmation" | "Entitlement to Payments" | "Letter" | "Ownership" | "Pay Slip" | "Proof of Sale" | "Proof of Winnings" | "Severance" | "Tax Return" | "Will" | "Bank Statement" | "Brokerage Statement" | "Current Lease" | "Financial Statement" | "Certificate of Incorporation/Formation" | "Certificate of Registratios" | "Company Charter" | "Certificate of Good Standing" | "Government-issued Business License" | "Corporate Charter" | "Articles of Incorporation" | "Bank Passbook/Statement" | "Certified Proof of Identity" | "Certified Proof of Address" | "Income Tax Return" | "Additional Proof of Identity Document" | "Proof of Principal Place of Business and Registration" | "Utility Bill" | "Evidence of Ownership of Property" | "Authorization to Open Account - Evidence" | "Authorization to Open Account - Certification" | "Italian Health Card (Tessera Sanitaria)" | "CRS card of Lombardy" | "Italian Electronic ID Card - CIE" | "Court- or Govt-issued document" | "Copy of Passport, National Id or Driver's License" | "Passport" | "National ID";
            readonly signature?: string;
            readonly externalAccountId?: string;
            /**
             * @description Identifier at the external entity for the individual executing the agreement. Must be an individual listed on the application. Ignored for INDIVIDUAL applications as the agreements must be executed by the Account Holder. Required for JOINT accounts created via ECA for POI and POA submission. For the JOINT holder created via ECA, external id of the account holder needs to be provided for which POI/POA is being submitted.
             * @example Test_22
             */
            readonly externalIndividualId?: string;
            /**
             * @description Description of document submitted to satisfy Proof of Identity.
             * @example Driver License
             * @enum {string}
             */
            readonly proofOfIdentityType?: "Driver License" | "Passport" | "Alien ID Card" | "National ID Card" | "Bank Statement" | "Evidence of Ownership of Property" | "Credit Card Statement" | "Utility Bill" | "Brokerage Statement" | "T4 Statement" | "CRA Assessment" | "Hong Kong and Macao Entry Permit";
            /**
             * Format: date
             * @description Expiration date of the ID Document.
             */
            readonly expirationDate?: string;
            /**
             * @description Description of document submitted to satisfy Proof of Address.
             * @example Bank Statement
             * @enum {string}
             */
            readonly proofOfAddressType?: "Driver License" | "Bank Statement" | "Brokerage Statement" | "Homeowner Insurance Policy Bill" | "Homeowner Insurance Policy Document" | "Renter Insurance Policy bill" | "Renter Insurance Policy Document" | "Security System Bill" | "Government Issued Letters" | "Utility Bill" | "Current Lease" | "Evidence of Ownership of Property" | "Other Document";
            readonly payload?: components["schemas"]["FilePayload"];
        };
        readonly DocumentSubmission: {
            readonly documents?: readonly components["schemas"]["Document"][];
            readonly accountId?: string;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
        };
        readonly DuplicateAccount: {
            readonly accountId?: string;
            /** Format: int32 */
            readonly numberOfDuplicates?: number;
        };
        readonly DwacInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example IN
             * @enum {string}
             */
            readonly direction: "IN";
            /** @example U46377 */
            readonly accountId: string;
            /** @example 12345678A */
            readonly contraBrokerAccountId: string;
            /** @example 123456789 */
            readonly contraBrokerTaxId: string;
            /** @example 1000 */
            readonly quantity: number;
            readonly tradingInstrument: components["schemas"]["TradingInstrument"];
            /** @example Title */
            readonly accountTitle?: string;
            /** @example refId */
            readonly referenceId?: string;
        };
        readonly EFPQuantityLimits: {
            /** Format: int32 */
            readonly maxNominalEfpPerOrder?: number;
            /** Format: int32 */
            readonly maxNetEfpTrades?: number;
            /** Format: int32 */
            readonly maxGrossEfpTrades?: number;
        };
        readonly EchoResponse: {
            /**
             * @example GET
             * @enum {string}
             */
            readonly requestMethod: "GET" | "POST" | "PATCH" | "PUT";
            /**
             * @example HTTPS
             * @enum {string}
             */
            readonly securityPolicy: "HTTPS" | "SIGNED_JWT" | "ENCRYPTED_JWE";
            /** @example {} */
            readonly queryParameters?: Record<string, never>;
        };
        readonly EddaInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example Instruction Name */
            readonly bankInstructionName: string;
            /** @example CNH */
            readonly currency: string;
            /** @example U2323232 */
            readonly accountId: string;
            /** @example 003 */
            readonly bankBranchCode: string;
            /** @example 132456 */
            readonly bankAccountNumber: string;
            /** @example 003 */
            readonly bankClearingCode: string;
            /**
             * @example hkId
             * @enum {string}
             */
            readonly debtorIdentificationDocumentType: "hkId" | "passport" | "chinaId" | "hkMacaoEntryPermit";
        };
        readonly EligibleContractParticipant: {
            readonly eligibleContractParticipantDetails?: readonly components["schemas"]["EligibleContractParticipantDetails"][];
            readonly status?: boolean;
        };
        readonly EligibleContractParticipantDetails: {
            /** @enum {string} */
            readonly code?: "DiscretionaryBasis" | "HighRisk";
            readonly status?: boolean;
        };
        readonly EmploymentDetails: {
            readonly employer?: string;
            readonly occupation?: string;
            readonly description?: string;
            readonly employerBusiness?: string;
            readonly employerAddress?: components["schemas"]["Address"];
            readonly employerPhone?: string;
            readonly emplCountryResCountryDetails?: string;
        };
        /** @deprecated */
        readonly EnableAccountInBrokerage: {
            readonly accountId?: string;
        };
        readonly EnrollInDRIP: {
            readonly accountId?: string;
        };
        readonly EnrollInSYEP: {
            readonly accountId?: string;
            readonly documents?: readonly components["schemas"]["Document"][];
        };
        readonly EntityIRABene: {
            readonly name?: string;
            readonly entityType?: string;
            readonly type?: string;
            readonly location?: {
                readonly [key: string]: string;
            };
            readonly articleOfWill?: string;
        };
        readonly EnumerationResponse: {
            readonly enumerationsType?: string;
            readonly formNumber?: string;
            readonly jsonData?: components["schemas"]["ArrayNode"];
        };
        /**
         * @description <ul><li>exchange-bundles - query most up to date list of exchange-bundles for tradingPermissions</li><li>business-and-occupation - list of occupation and employerBusiness for employmentDetails</li><li>employee-track - query most up to date companyId for account. For affiliation details, if company has an existing IBKR Employee Track account</li><li>fin-info-ranges - query most up to date range IDs by currency for annualNetIncome, netWorth, liquidNetWorth</li><li>acats - query most up to date values for brokerId and brokerName. Used if funding via US ACATS extPositionsTransfers</li><li>aton - query most up to date values for brokerId and brokerName. Used if funding via US ACATS extPositionsTransfers</li><li>market-data - query most up to date values for brokerId and brokerName. Used if funding via ATON Canada extPositionsTransfers</li><li>edd-avt - query questions associated with EDD (Enhanced Due Diligence) or AVT (Additional Verification) tasks assigned to an account</li><li>prohibited-country - view list of prohibited countries. Applicants that reside in prohibited country are restricted from opening an account with IBKR. Error will be thrown IF legalResidenceCountry, OR country (included within Residence, mailingAddress and employerAddress, taxResidency node) is a prohibited country</li><li>employee-plans - view EPA that are linked to master account (applicable IF offering SEP IRA accounts)</li><li>questionnaires - obtain list of questionnaires</li><li>security-questions - obtain list of questions supported for IBKR security questions</li><li>quiz-questions - obtain list of questions associated with IBKR knowledge assessment</li><li>wire-instructions - obtain list of wire instructions</li><li>product-country-bundles - obtain list of product country bundles</li></ul>
         * @enum {string}
         */
        readonly EnumerationType: "exchange-bundles" | "business-and-occupation" | "employee-track" | "fin-info-ranges" | "acats" | "aton" | "market-data" | "edd-avt" | "prohibited-country" | "employee-plans" | "questionnaires" | "security-questions" | "quiz-questions" | "wire-instructions" | "product-country-bundles";
        readonly ErrorResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
        };
        readonly ExchangeAccess: {
            /** @enum {string} */
            readonly assetClass?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            /** @enum {string} */
            readonly exchange?: "NYSE" | "AMEX" | "NASDAQ" | "CBOE" | "ISE" | "BOX" | "PHLX" | "PSE";
        };
        readonly ExtPositionsTransferType: {
            readonly partialStockPositions?: readonly components["schemas"]["PartialStockPosition"][];
            readonly partialBondPositions?: readonly components["schemas"]["PartialBondPosition"][];
            readonly partialOptionPositions?: readonly components["schemas"]["PartialOptionPosition"][];
            readonly partialWarrantPositions?: readonly components["schemas"]["PartialWarrantPosition"][];
            readonly partialFundPositions?: readonly components["schemas"]["PartialFundPosition"][];
            readonly partialCashPositions?: readonly components["schemas"]["PartialCashPosition"][];
            /** @enum {string} */
            readonly type?: "FULL" | "PARTIAL";
            /** @enum {string} */
            readonly subType?: "ACATS" | "ATON";
            readonly brokerId?: string;
            readonly brokerName?: string;
            readonly accountAtBroker?: string;
            /** @enum {string} */
            readonly srcIRAType?: "RI" | "RO" | "RT" | "SP" | "ED" | "TH" | "RH" | "SH" | "RRSP" | "SRRSP" | "TFSA" | "SIMPLE" | "ISA" | "JISA";
            readonly marginLoan?: boolean;
            readonly shortPos?: boolean;
            readonly optionPos?: boolean;
            readonly ibAccount?: string;
            readonly thirdPartyType?: string;
            /** Format: int32 */
            readonly approximateAccountValue?: number;
            readonly ssn?: string;
            readonly ein?: string;
            readonly signature?: string;
            readonly authorizeToRemoveFund?: boolean;
        };
        readonly ExternalPositionTransfer: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example FULL
             * @enum {string}
             */
            readonly type: "FULL";
            /**
             * @example ACATS
             * @enum {string}
             */
            readonly subType: "ACATS" | "ATON";
            /** @example 0226 */
            readonly brokerId: string;
            /** @example Wall Street Financial Group */
            readonly brokerName: string;
            /** @example SOL12345 */
            readonly accountAtBroker: string;
            /**
             * @example RO
             * @enum {string}
             */
            readonly sourceIRAType?: "RO" | "RI" | "RT" | "SP" | "ED" | "TH" | "RH" | "SH";
            /** @example U2323232 */
            readonly accountId: string;
            /** @example sample signature */
            readonly signature: string;
        };
        readonly FileData: {
            readonly data?: Record<string, never>;
            readonly name?: string;
        };
        readonly FileDetailsResponse: {
            readonly accountId?: string;
            readonly requestFileName?: string;
            readonly responseFileName?: string;
        };
        readonly FilePayload: {
            /**
             * @description Format of the file.
             * @example application/pdf
             */
            readonly mimeType: string;
            /**
             * @description Includes document encoded in base64.
             * @example pm.collectionVariables.get('form5001')
             */
            readonly data: string;
        };
        readonly FinancialInformation: {
            readonly investmentExperience?: readonly components["schemas"]["AssetExperience"][];
            readonly investmentObjectives?: readonly ("Trading" | "Growth" | "Speculation" | "Hedging" | "Preservation" | "Income")[];
            readonly additionalSourcesOfIncome?: readonly components["schemas"]["SourceOfIncomeType"][];
            readonly sourcesOfWealth?: readonly components["schemas"]["SourceOfWealthType"][];
            readonly soiQuestionnaire?: components["schemas"]["SOIQuestionnaire"];
            readonly questionnaires?: readonly components["schemas"]["QuestionnaireType"][];
            readonly netWorth?: number;
            readonly liquidNetWorth?: number;
            readonly annualNetIncome?: number;
            readonly totalAssets?: number;
            readonly sourceOfFunds?: string;
            readonly translated?: boolean;
        };
        readonly FopInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example IN
             * @enum {string}
             */
            readonly direction: "IN" | "OUT";
            /** @example U46377 */
            readonly accountId: string;
            /** @example 12345678A */
            readonly contraBrokerAccountId: string;
            /** @example 534 */
            readonly contraBrokerDtcCode: string;
            /** @example 1000 */
            readonly quantity: number;
            readonly tradingInstrument: components["schemas"]["TradingInstrument"];
        };
        readonly ForbiddenInstructionResponse: {
            /** @example /invalid-argument */
            readonly type: string;
            /** @example Bad Request */
            readonly title: string;
            /**
             * Format: int32
             * @example 400
             */
            readonly status: number;
            /** @example Input is not a JSON Object or doesn't contain all expected fields */
            readonly detail: string;
            /**
             * Format: int32
             * @example 8389943
             */
            readonly instructionSetId: number;
            readonly instructionResult: components["schemas"]["InstructionErrorResult"];
        };
        readonly FormCRS: {
            /** @enum {string} */
            readonly controllingPersonDesignation?: "SENIOR_MGMT_OFFICER" | "BY_OWNERSHIP" | "BY_OTHER_MEANS";
            /** @enum {string} */
            readonly oecdStatus?: "DEPOSITORY_INSTITUTION" | "CUSTODIAL_INSTITUTION" | "SPECIFIED_INSURANCE_COMPANY" | "INVESTMENT_ENTITY_IN_NONPARTICIPATING_JURISDICTION" | "INVESTMENT_ENTITY_NOT_LISTED" | "PUBLICLY_TRADED_CORPORATION_OR_AFFILIATE" | "OTHER_ACTIVE_NON_FINANCIAL_ENTITY" | "PASSIVE_NON_FINANCIAL_ENTITY" | "EXEMPT_RETIREMENT_PLAN" | "NON_REPORTING_FI" | "OTHER_INVESTMENT_ENTITY" | "FINANCIAL_INSTITUTION" | "NON_REPORTING_FINANCIAL_INSTITUTION";
        };
        readonly FormDetails: {
            /** Format: int32 */
            readonly formNumber?: number;
            readonly sha1Checksum?: string;
            /** Format: date-time */
            readonly dateModified?: string;
            readonly fileName?: string;
            readonly language?: string;
            readonly formName?: string;
            readonly payload?: components["schemas"]["FormPayload"];
            readonly apiSupportedTask?: boolean;
            readonly type?: string;
            readonly action?: string;
            readonly acceptableDocs?: readonly string[];
            readonly questionnaire?: readonly components["schemas"]["QuestionnaireResponse"][];
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            /** Format: int64 */
            readonly fileLength?: number;
        };
        readonly FormFileResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly fileData?: components["schemas"]["FileData"];
            readonly formDetails?: readonly components["schemas"]["FormDetails"][];
            /** Format: date-time */
            readonly timestamp?: string;
        };
        readonly FormPayload: {
            readonly mimeType?: string;
            readonly data?: string;
        };
        readonly FormW8BEN: {
            readonly localTaxForms?: readonly components["schemas"]["LocalTaxForm"][];
            readonly name?: string;
            readonly tin?: string;
            readonly foreignTaxId?: string;
            readonly tinOrExplanationRequired?: boolean;
            /** @enum {string} */
            readonly explanation?: "US_TIN" | "TIN_NOT_DISCLOSED" | "TIN_NOT_REQUIRED" | "TIN_NOT_ISSUED";
            /** Format: int32 */
            readonly referenceNumber?: number;
            readonly part29ACountry?: string;
            readonly cert?: boolean;
            /** @enum {string} */
            readonly signatureType?: "Electronic" | "Physical";
            readonly blankForm?: boolean;
            readonly taxFormFile?: string;
            /** Format: int32 */
            readonly proprietaryFormNumber?: number;
            readonly electronicFormat?: boolean;
            readonly submitDate?: string;
        };
        readonly FormW8BENE: {
            readonly substantialUsOwnerExternalIds?: readonly string[];
            readonly name?: string;
            readonly countryOfOrganization?: string;
            readonly disregardedEntityName?: string;
            /** @enum {string} */
            readonly entityType?: "CORPORATION" | "DISREGARDED_ENTITY" | "PARTNERSHIP" | "SIMPLE_TRUST" | "GRANTOR_TRUST" | "COMPLEX_TRUST" | "ESTATE" | "GOVERNMENT" | "CENTRAL_BANK_OF_ISSUE" | "TAX_EXEMPT_ORGANIZATION" | "PRIVATE_FOUNDATION";
            /** @enum {string} */
            readonly fatcaStatus?: "NONPARTICIPATING_FFI" | "PARICIPATING_FFI" | "REPORTING_MODEL_1_FFI" | "REPORTING_MODEL_2_FFI" | "REGISTERED_DEEMED_COMPLIANT_FFI" | "SPONSORED_FFI" | "CERTIFIED_DEEMED_COMPLIANT_NONREGISTERING_LOCAL_BANK" | "CERTIFIED_DEEMED_COMPLIANT_FFI" | "CERTIFIED_DEEMED_COMPLIANT_SPONSORED_VEHICLE" | "CERTIFIED_DEEMED_COMPLIANT_LIMITED_LIFE_DEBT" | "CERTIFIED_DEEMED_COMPLIANT_INVESTMENT_ADVISORS" | "OWNER_DOCUMENTED_FFI" | "RESTRICTED_DISTRIBUTOR" | "NONREPORTING_IGA_FFI" | "FOREIGN_GOVERNMENT" | "INTERNATIONAL_ORGANIZATION" | "EXEMPT_RETIREMENT_PLANS" | "ENTITY_OWNED_BY_EXEMPT_BENEFICIAL_OWNERS" | "TERRITORY_FINANCIAL_INSTITUTION" | "NONFINANCIAL_GROUP" | "EXCEPTED_NONFINANCIAL_STARTUP" | "EXCEPTED_NONFINANCIAL_ENTITY" | "AN_501_C_ORGANIZATION" | "NONPROFIT_ORGANIZATION" | "PUBLICLY_TRADED_NFFE" | "EXCEPTED_TERRITORY_NFFE" | "ACTIVE_NFFE" | "PASSIVE_NFFE" | "EXCEPTED_INTER_AFFILIATE_FFI" | "DIRECT_REPORTING_NFFE" | "SPONSORED_DIRECT_REPORTING_NFFE";
            readonly usTin?: string;
            readonly giin?: string;
            readonly foreignTin?: string;
            readonly tinOrExplanationRequired?: boolean;
            /** @enum {string} */
            readonly explanation?: "US_TIN" | "TIN_NOT_DISCLOSED" | "TIN_NOT_REQUIRED" | "TIN_NOT_ISSUED";
            /** Format: int32 */
            readonly referenceNumber?: number;
            readonly submitDate?: string;
            /** @enum {string} */
            readonly box11Status?: "LIMITED_BRANCH" | "US_BRANCH" | "PARTICIPATING_FFI" | "REPORTING_MODEL_1_FFI" | "REPORTING_MODEL_2_FFI";
            readonly part314A?: boolean;
            readonly part314ACountry?: string;
            /** @enum {string} */
            readonly part314B?: "CompanyMeetsOwnershipAndBaseErosionTest" | "TaxExemptPensionTrustOrPensionFund" | "CompanyMeetsDerivativeBenefitsTest" | "TaxExemptOrganization" | "CompanyWithIncomeActiveBusiness" | "PubliclyTradedCorporation" | "FavorableDiscretionaryDetermination" | "SubsidiaryOfAPubliclyTradedCorporation" | "Government" | "NoLobArticleInTreaty" | "Other";
            readonly part314C?: boolean;
            readonly part416?: string;
            readonly part417I?: boolean;
            readonly part417Ii?: boolean;
            readonly part518?: boolean;
            readonly part619?: boolean;
            readonly part720?: string;
            readonly part721?: boolean;
            readonly part822?: boolean;
            readonly part923?: boolean;
            readonly part1024A?: boolean;
            readonly part1024B?: boolean;
            readonly part1024C?: boolean;
            readonly part1024D?: boolean;
            readonly part1125A?: boolean;
            readonly part1125B?: boolean;
            readonly part1125C?: boolean;
            readonly part1226?: boolean;
            readonly part1226Desc1?: string;
            readonly part1226Desc2?: string;
            /** @enum {string} */
            readonly part1226Desc3?: "CollectiveInvestmentVehicle" | "ExemptBeneficialOwner-RetirementPlan" | "FinancialInstitutionwithlocalClientBase" | "InvestmentAdvisorsandManagers" | "LocalBank" | "SponsoredCloselyHeldInvestmentVehicle" | "SponsoredInvestmentEntity" | "TrusteeDocumentedTrust";
            readonly part1226Desc4?: string;
            readonly part1327?: boolean;
            readonly part1428A?: boolean;
            readonly part1428B?: boolean;
            readonly part1529A?: boolean;
            readonly part1529B?: boolean;
            readonly part1529C?: boolean;
            readonly part1529D?: boolean;
            readonly part1529E?: boolean;
            readonly part1529F?: boolean;
            readonly part1630?: boolean;
            readonly part1731?: boolean;
            readonly part1832?: boolean;
            readonly part1933?: boolean;
            readonly part2034?: boolean;
            readonly part2135?: boolean;
            readonly part2135Date?: string;
            readonly part2236?: boolean;
            readonly part2337A?: boolean;
            readonly part2337ADesc?: string;
            readonly part2337B?: boolean;
            readonly part2337BDesc1?: string;
            readonly part2337BDesc2?: string;
            readonly part2438?: boolean;
            readonly part2539?: boolean;
            readonly part2640A?: boolean;
            readonly part2640B?: boolean;
            readonly part2640C?: boolean;
            readonly part2741?: boolean;
            readonly part2842?: string;
            readonly part2843?: boolean;
            readonly cert?: boolean;
            /** @enum {string} */
            readonly signatureType?: "Electronic" | "Physical";
            readonly blankForm?: boolean;
            readonly taxFormFile?: string;
            /** Format: int32 */
            readonly proprietaryFormNumber?: number;
            readonly electronicFormat?: boolean;
        };
        readonly FormW8IMY: {
            readonly name?: string;
            readonly countryOfIncorporation?: string;
            readonly disregardedEntityName?: string;
            /** @enum {string} */
            readonly entityType?: "QUALIFIED_INTERMEDIARY" | "NONQUALIFIED_INTERMEDIARY" | "TERRITORY_FINANCIAL" | "US_BRANCH" | "WITHHOLDING_FOREIGN_PARTNERSHIP" | "WITHHOLDING_FOREIGN_TRUST" | "NONWITHHOLDING_FOREIGN_PARTNERSHIP" | "NONWITHHOLDING_FOREIGN_SIMPLE_TRUST" | "NONWITHHOLDING_FOREIGN_GRANTOR_TRUST";
            /** @enum {string} */
            readonly fatcaStatus?: "NONPARTICIPATING_FFI" | "PARTICIPATING_FFI" | "REPORTING_MODEL1_FFI" | "REPORTING_MODEL2_FFI" | "REGISTERED_DEEMED_COMPLAINT" | "TERRITORY_FINANCIAL_INSTITUTION" | "SPONSORED_FFI" | "CERTIFIED_DEEMED_COMPLAINT_FFI" | "CERTIFIED_DEEMED_COMPLAINT_SPONSORED" | "CERTIFIED_DEEMED_COMPLAINT_LIMITED_LIFE_DEBT" | "OWNER_DOCUMENTED_FFI" | "RESTRICTED_DISTRIBUTOR" | "FOREIGN_CENTRAL_BANK_ISSUE" | "NONREPORTING_IGA_FFO" | "EXEMPT_RETIREMENT_PLAN" | "EXCEPTED_NONFINANCIAL_GROUP_ENTITY" | "EXCEPTED_NONFINANCIAL_STARTUP_COMPANY" | "EXCEPTED_NONFINANCIAL_ENTITY_IN_LIQUIDATION" | "PUBLICLY_TRADED_NFFE" | "EXCEPTED_TERRITORY_NFFE" | "ACTIVE_NFFE" | "PASSIVE_NFFE" | "DIRECT_REPORTING_NFFE" | "SPONSORED_DIRECT_REPORTING_NFFE";
            readonly usTin?: string;
            /** @enum {string} */
            readonly usTinType?: "QI-EIN" | "WP-EIN" | "WT-EIN" | "EIN" | "SSN" | "ITIN";
            readonly giin?: string;
            /** Format: int32 */
            readonly referenceNumber?: number;
            /** @enum {string} */
            readonly box11Status?: "LIMITED_BRANCH" | "US_BRANCH" | "PARTICIPATING_FFI" | "REPORTING_MODEL_1_FFI" | "REPORTING_MODEL_2_FFI";
            readonly part314A?: boolean;
            readonly part314B?: boolean;
            readonly part314C?: boolean;
            readonly part314CDesc?: string;
            readonly part314D?: boolean;
            readonly part314DDesc?: string;
            readonly part314E?: boolean;
            readonly part314EDesc?: string;
            readonly part314EI?: boolean;
            readonly part314EIi?: boolean;
            readonly part415A?: boolean;
            readonly part415B?: boolean;
            readonly part415C?: boolean;
            readonly part415D?: boolean;
            readonly part516A?: boolean;
            readonly part516B?: boolean;
            readonly part516C?: boolean;
            readonly part617A?: boolean;
            readonly part617B?: boolean;
            readonly part617C?: boolean;
            readonly part718?: boolean;
            readonly part819?: boolean;
            readonly part920?: boolean;
            readonly part1021?: string;
            readonly part1021A?: string;
            readonly part1021B?: boolean;
            readonly part1021C?: boolean;
            readonly part1122A?: boolean;
            readonly part1122B?: boolean;
            readonly part1122C?: boolean;
            readonly part1223?: boolean;
            readonly part1324?: boolean;
            readonly part1425A?: string;
            readonly part1425B?: boolean;
            readonly part1526?: boolean;
            readonly part1627A?: boolean;
            readonly part1627B?: boolean;
            readonly part1627C?: boolean;
            readonly part1728?: boolean;
            readonly part1829?: boolean;
            readonly part1829Desc1?: string;
            readonly part1829Desc2?: string;
            readonly part1829Desc3?: string;
            readonly part1930A?: boolean;
            readonly part1930B?: boolean;
            readonly part1930C?: boolean;
            readonly part1930D?: boolean;
            readonly part1930E?: boolean;
            readonly part1930F?: boolean;
            readonly part2031?: boolean;
            readonly part2132?: boolean;
            readonly part2132Desc?: string;
            readonly part2233?: boolean;
            readonly part2233Desc?: string;
            readonly part2334A?: boolean;
            readonly part2334ADesc?: string;
            readonly part2334B?: boolean;
            readonly part2334BDesc?: string;
            readonly part2435?: boolean;
            readonly part2536?: boolean;
            readonly part2637?: boolean;
            readonly part2738?: string;
            readonly part2739?: boolean;
            readonly cert?: boolean;
        };
        readonly FormW9: {
            readonly localTaxForms?: readonly components["schemas"]["LocalTaxForm"][];
            readonly name?: string;
            readonly businessName?: string;
            /** @enum {string} */
            readonly customerType?: "Individual" | "Corporation" | "Partnership" | "LLC" | "Other";
            readonly taxClassification?: string;
            readonly otherCustomerType?: string;
            readonly tin?: string;
            /** @enum {string} */
            readonly tinType?: "SSN" | "EIN" | "NonUS_NationalId";
            readonly cert1?: boolean;
            readonly cert2?: boolean;
            readonly cert3?: boolean;
            readonly cert4?: boolean;
            /** @enum {string} */
            readonly signatureType?: "Electronic" | "Physical";
            readonly blankForm?: boolean;
            readonly taxFormFile?: string;
            /** Format: int32 */
            readonly proprietaryFormNumber?: number;
        };
        readonly GetAvailableStmtDatesResponse: {
            readonly data?: components["schemas"]["AvailableStatementDatesData"];
        };
        readonly GetAvailableTaxFormsResponse: {
            readonly data?: components["schemas"]["AvailableTaxFormsData"];
        };
        readonly GetAvailableTradeConfirmationDatesResponse: {
            readonly data?: {
                /** @example String */
                readonly dataType?: string;
                /** @description available trade confirmation dates */
                readonly value?: readonly string[];
            };
        };
        readonly GetBrokerListResponse: {
            /** @example COMPLEX_ASSET_TRANSFER */
            readonly instructionType: string;
            readonly brokers: readonly string[];
        };
        readonly GetParticipatingListResponse: {
            /** @example eDDA */
            readonly type: string;
            readonly participatingBanks: readonly {
                /** @example WELAB BANK LIMITED */
                readonly institutionName: string;
                /** @example 390 */
                readonly clearingCode: string;
                /** @example WEDIHKHHXXX */
                readonly BIC: string;
            }[];
        };
        readonly GetStatementsResponse: {
            readonly data?: {
                /** @description the data type of the value after decoding */
                readonly dataType?: string;
                /** @description encoding used for the value */
                readonly encoding?: string;
                /** @description Base 64 encoded String of byte[]. Byte[] represents compressed data when gzip is true */
                readonly value?: string;
                /** @description mimeType of document after decoding and serializing the value */
                readonly mimeType?: string;
                /** @description content encoding flag. Represents whether the response is compressed */
                readonly gzip?: boolean;
                /** @description specify response media types that are acceptable */
                readonly accept?: string;
            };
        };
        readonly HighWaterMarkConfigurationType: {
            /** Format: int32 */
            readonly numberOfPeriods?: number;
            readonly prorateForWithdrawals?: boolean;
        };
        readonly HighWaterMarkType: {
            readonly hwm?: components["schemas"]["HighWaterMarkConfigurationType"];
            readonly previousLosses?: readonly components["schemas"]["PreviousLossesType"][];
        };
        readonly IRABeneficiariesType: {
            readonly primaryBeneficiaries?: readonly components["schemas"]["IRAPrimaryBeneficiary"][];
            readonly primaryBeneficiaryEntities?: readonly components["schemas"]["IRAPrimaryBeneficiaryEntity"][];
            readonly contingentBeneficiaries?: readonly components["schemas"]["IRAContingentBeneficiary"][];
            readonly contingentBeneficiaryEntities?: readonly components["schemas"]["IRAContingentBeneficiaryEntity"][];
            readonly spousePrimaryBeneficary?: boolean;
            readonly successor?: boolean;
        };
        readonly IRAContingentBeneficiary: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            readonly ownershipPercentage?: number;
            readonly title?: components["schemas"]["Title"];
            /** @enum {string} */
            readonly relationship?: "Brother" | "Daughter" | "Estate" | "Father" | "Husband" | "Mother" | "Other" | "Sister" | "Son" | "Wife" | "Charity" | "Trust" | "Spouse" | "Child" | "Sibling" | "Parent" | "Grandchild" | "Common Law Partner";
        };
        readonly IRAContingentBeneficiaryEntity: {
            readonly name?: string;
            readonly address?: components["schemas"]["Address"];
            readonly id?: string;
            readonly externalId?: string;
            readonly ownershipPercentage?: number;
            readonly title?: components["schemas"]["Title"];
            /** @enum {string} */
            readonly relationship?: "Brother" | "Daughter" | "Estate" | "Father" | "Husband" | "Mother" | "Other" | "Sister" | "Son" | "Wife" | "Charity" | "Trust" | "Spouse" | "Child" | "Sibling" | "Parent" | "Grandchild" | "Common Law Partner";
            readonly executor?: components["schemas"]["Individual"];
            /** Format: date */
            readonly executionDate?: string;
            readonly articleOfWill?: string;
            /** @enum {string} */
            readonly entityType?: "Trust" | "Estate" | "Charity";
        };
        readonly IRADecedent: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            /** Format: date */
            readonly dateOfDeath?: string;
            readonly title?: components["schemas"]["Title"];
            /** @enum {string} */
            readonly inheritorType?: "S" | "I" | "T" | "O";
            /** @enum {string} */
            readonly relationship?: "Other" | "Trust" | "Spouse" | "Individual";
        };
        readonly IRADepositDetails: {
            /** @enum {string} */
            readonly depositType?: "contribution" | "rollover";
            /** @enum {string} */
            readonly taxYear?: "current" | "prior";
            /** @enum {string} */
            readonly fromIraType?: "RI" | "RO" | "RT" | "SP" | "ED" | "TH" | "RH" | "SH" | "RRSP" | "SRRSP" | "TFSA" | "SIMPLE" | "ISA" | "JISA";
        };
        readonly IRAPrimaryBeneficiary: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            readonly ownershipPercentage?: number;
            readonly title?: components["schemas"]["Title"];
            /** @enum {string} */
            readonly relationship?: "Brother" | "Daughter" | "Estate" | "Father" | "Husband" | "Mother" | "Other" | "Sister" | "Son" | "Wife" | "Charity" | "Trust" | "Spouse" | "Child" | "Sibling" | "Parent" | "Grandchild" | "Common Law Partner";
        };
        readonly IRAPrimaryBeneficiaryEntity: {
            readonly name?: string;
            readonly address?: components["schemas"]["Address"];
            readonly id?: string;
            readonly externalId?: string;
            readonly ownershipPercentage?: number;
            readonly title?: components["schemas"]["Title"];
            /** @enum {string} */
            readonly relationship?: "Brother" | "Daughter" | "Estate" | "Father" | "Husband" | "Mother" | "Other" | "Sister" | "Son" | "Wife" | "Charity" | "Trust" | "Spouse" | "Child" | "Sibling" | "Parent" | "Grandchild" | "Common Law Partner";
            readonly executor?: components["schemas"]["Individual"];
            /** Format: date */
            readonly executionDate?: string;
            readonly articleOfWill?: string;
            /** @enum {string} */
            readonly entityType?: "Trust" | "Estate" | "Charity";
            readonly charityNumber?: string;
        };
        /** @description Identification information of the associated person. */
        readonly Identification: {
            /**
             * @description Citizenship of the applicant.<br>If citizenship, citizenship2, OR citizenship3 is classified as a ‘Prohibited Country', THEN ProhibitedCountryQuestionnaire is required.<br>List of Prohibited Countries an be obtained using /getEnumerations<br>Preferred id document by IssuingCountry
             * @example AUS
             */
            readonly citizenship?: string;
            /** @description If the applicant has multiple citizenship, provide the additional citizenship of the applicant.<br>If citizenship, citizenship2, OR citizenship3 is classified as a ‘Prohibited Country', THEN ProhibitedCountryQuestionnaire is required.<br>List of Prohibited Countries an be obtained using /getEnumerations<br>Preferred id document by IssuingCountry */
            readonly citizenship2?: string;
            /** @description If the applicant has multiple citizenship, provide the additional citizenship of the applicant.<br>If citizenship, citizenship2, OR citizenship3 is classified as a ‘Prohibited Country', THEN ProhibitedCountryQuestionnaire is required.<br>List of Prohibited Countries an be obtained using /getEnumerations<br>Preferred id document by IssuingCountry */
            readonly citizenship3?: string;
            /** @description Social security number, required for US Residents and citizens. */
            readonly ssn?: string;
            /** @description Social insurance number, required for Canada Residents and citizens. */
            readonly sin?: string;
            /**
             * @description Drivers License<br>Pattern for AUS: ^.{0,64}$<br>Pattern for NZL: ^[A-Z]{2}\d{6}$
             * @example 989444798
             */
            readonly driversLicense?: string;
            /** @description Passport */
            readonly passport?: string;
            /** @description Alien Card */
            readonly alienCard?: string;
            /** @description HK and Macao Travel Permit */
            readonly hkTravelPermit?: string;
            /** @description Only applicable for Australia residents. */
            readonly medicareCard?: string;
            /**
             * @description Required if MedicareCard is provided.
             * @enum {string}
             */
            readonly cardColor?: "BLUE" | "GREEN" | "YELLOW";
            /** @description Required if MedicareCard is provided. */
            readonly medicareReference?: string;
            /** @description National Identification Card<br>Pattern by Country-<br> ARG: ^\d{8}$<br>AUS: ^(\d{8}|\d{9})$<br>BRA: ^\d{11}$<br>CHN: ^\d{17}(\d|X)$<br>DNK: ^\d{10}$<br>ESP: ^\d{8}[A-Z]$<br>FRA: ^\d{15}$<br>FRA: ^\d{4}([A-Z]|\d){3}\d{5}$<br>ITA: ^([A-Z]{2}\d{7}|\d{7}[A-Z]{2}|[A-Z]{2}\d{5}[A-Z]{2})$<br>ITA: ^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$<br>MEX: ^[A-Z]{4}\d{6}[A-Z]{6}\d{2}$<br>MYZ: ^\d{12}$<br>RUS: ^\d{10}$<br>RUS: ^\d{9}$<br>SGP: ^[A-Z]\d{7}[A-Z]$<br>SWE: ^(\d{10}|\d{12})$<br>TUR: ^\d{11}$<br>ZAF: ^\d{13}$ */
            readonly nationalCard?: string;
            /**
             * @description Issuing country of the ID document.
             * @example AUS
             */
            readonly issuingCountry?: string;
            /** @description Issuing state of the ID document. */
            readonly issuingState?: string;
            /** @description Only applicable IF ID_Type=DriversLicense AND IssuingCountry=AUS */
            readonly rta?: string;
            readonly legalResidenceCountry?: string;
            readonly legalResidenceState?: string;
            readonly educationalQualification?: string;
            readonly fathersName?: string;
            readonly greenCard?: boolean;
            /** @description India PanCard, required for India Residents and citizens. */
            readonly panNumber?: string;
            /** @description Tax ID TIN within <TaxResidencies>foreign_tax_id within <W8Ben> */
            readonly taxId?: string;
            readonly proofOfAgeCard?: string;
            /** @description Indicate IF ID document has an ExpirationDate. */
            readonly expire?: boolean;
            /**
             * Format: date
             * @description Provide expiration date of the ID document. Cannot be past date.
             */
            readonly expirationDate?: string;
        };
        readonly Individual: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
        };
        readonly IndividualApplicant: {
            readonly accountHolderDetails?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly associatedIndividual?: components["schemas"]["AssociatedIndividual"];
            readonly financialInformation?: readonly components["schemas"]["FinancialInformation"][];
            readonly regulatoryInformation?: readonly components["schemas"]["RegulatoryInformation"][];
            readonly regulatedMemberships?: readonly components["schemas"]["RegulatedMembership"][];
            readonly accreditedInvestorInformation?: components["schemas"]["AccreditedInvestorInformation"];
            readonly taxInformation?: components["schemas"]["IndividualTaxInformation"];
            readonly withholdingStatement?: components["schemas"]["WithholdingStatementType"];
        };
        readonly IndividualIRABene: {
            readonly firstName?: string;
            readonly lastName?: string;
            readonly dateOfBirth?: string;
            readonly type?: string;
            readonly identification?: {
                readonly [key: string]: string;
            };
            readonly location?: {
                readonly [key: string]: string;
            };
            readonly relationship?: string;
            /** Format: int32 */
            readonly ownership?: number;
            readonly perStripes?: string;
        };
        readonly IndividualName: {
            /** @enum {string} */
            readonly salutation?: "Mr." | "Mrs." | "Ms." | "Dr." | "Mx." | "Ind.";
            readonly first?: string;
            readonly last?: string;
            readonly middle?: string;
            /** @enum {string} */
            readonly suffix?: "Jr." | "Sr." | "I" | "II" | "III" | "IV" | "V";
            readonly title?: string;
        };
        readonly IndividualTaxInformation: {
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly w8BenE?: components["schemas"]["FormW8BENE"];
        };
        readonly InformationChange: {
            readonly addEntities?: readonly components["schemas"]["AddEntity"][];
            readonly updateEntities?: readonly components["schemas"]["UpdateEntity"][];
            readonly deleteEntities?: readonly components["schemas"]["DeleteEntity"][];
            readonly ibAccountId?: string;
        };
        readonly InstructionErrorResult: {
            readonly error: {
                readonly errorCode: string;
                readonly errorMessage: string;
            };
        } & components["schemas"]["InstructionResult"];
        readonly InstructionPollingResponse: {
            /** @example 202 */
            readonly status: number;
            /** @example -1988905739 */
            readonly instructionSetId: number;
            readonly instructionResult?: components["schemas"]["PollingInstructionResult"];
        };
        readonly InstructionResponse: {
            /** @example 202 */
            readonly status: number;
            /** @example -1988905739 */
            readonly instructionSetId: number;
            readonly instructionResult?: components["schemas"]["InstructionResult"];
        };
        readonly InstructionResult: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example INTERNAL_CASH_TRANSFER
             * @enum {string}
             */
            readonly instructionType: "ACH_INSTRUCTION" | "CANCEL_INSTRUCTION" | "COMPLEX_ASSET_TRANSFER" | "DELETE_BANK_INSTRUCTION" | "DEPOSIT" | "DWAC" | "EXTERNAL_POSITION_TRANSFER" | "FOP" | "QUERY_RECENT_INSTRUCTIONS" | "QUERY_WITHDRAWABLE_FUNDS" | "INTERNAL_POSITION_TRANSFER" | "INTERNAL_CASH_TRANSFER" | "MICRO_AMOUNT" | "PREDEFINED_DESTINATION_INSTRUCTION" | "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION" | "WITHDRAWAL" | "QUERY_IRA_CONTRIBUTIONS" | "EDDA_INSTRUCTION" | "QUERY_RECENT_RECURRING_EVENTS" | "QUERY_RECURRING_INSTRUCTIONS" | "QUERY_ACCOUNT_BALANCES" | "QUERY_BANK_INSTRUCTION" | "QUERY_WITHDRAWABLE_CASH_EQUITY";
            /**
             * @example PENDING
             * @enum {string}
             */
            readonly instructionStatus: "PENDING" | "PROCESSED" | "REJECTED" | "PENDING_VERIFICATION";
            /** @example 45123654 */
            readonly instructionId: number;
            /** @example 23456745 */
            readonly ibReferenceId?: number;
            /** @example Please poll for status after 10 minutes */
            readonly description?: string;
        };
        readonly InsufficientScopeResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Forbidden */
            readonly title: string;
            /**
             * Format: int32
             * @example 403
             */
            readonly status: number;
            /** @example The access token fails to have sufficient scope */
            readonly detail?: string;
        };
        readonly InterestMarkupType: {
            /** @enum {string} */
            readonly currency?: "USD" | "EUR" | "GBP" | "CAD" | "JPY" | "HKD" | "AUD" | "CHF" | "MXN" | "SEK" | "NZD" | "HUF" | "CZK" | "CNH" | "DKK" | "RUB" | "ILS" | "NOK" | "SGD" | "PLN" | "ZAR" | "AED" | "KRW" | "SAR" | "TRY" | "RON" | "BGN";
            readonly debitMarkup?: number;
            readonly ibDebitMarkup?: number;
            readonly creditMarkdown?: number;
            readonly shortCreditMarkdown?: number;
            readonly shortCfdCreditMarkdown?: number;
            readonly longCfdDebitMarkdown?: number;
            readonly shortIndexCfdCreditMarkdown?: number;
            readonly longIndexCfdDebitMarkdown?: number;
            readonly shortFxCfdMarkup?: number;
            readonly longFxCfdMarkdown?: number;
        };
        readonly InternalCashTransferInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U46377 */
            readonly sourceAccountId: string;
            /** @example U15667 */
            readonly targetAccountId: string;
            /** @example 123 */
            readonly amount: number;
            /** @example GBP */
            readonly currency: string;
            /** @example Note */
            readonly clientNote?: string;
            /** Format: date-time */
            readonly dateTimeToOccur?: string;
        };
        readonly InternalPositionTransferInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U46377 */
            readonly sourceAccountId: string;
            /** @example U463756 */
            readonly targetAccountId: string;
            /** @example 100 */
            readonly transferQuantity: number;
            readonly tradingInstrument: components["schemas"]["TradingInstrument"];
            /**
             * @description If transferPrice is provided then tradeDate and settleDate are also required
             * @example 123
             */
            readonly transferPrice?: number;
            /**
             * @description If tradeDate is provided then settleDate is also required
             * @example 2025-02-17
             */
            readonly tradeDate?: string;
            /**
             * @description If settleDate is provided then tradeDate is also required
             * @example 2025-02-25
             */
            readonly settleDate?: string;
        };
        readonly InternalServerErrorResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Internal Server Error */
            readonly title: string;
            /**
             * Format: int32
             * @example 500
             */
            readonly status: number;
        };
        readonly InvalidAccessTokenResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Unauthorized */
            readonly title: string;
            /**
             * Format: int32
             * @example 401
             */
            readonly status: number;
            /** @example The access token request is invalid */
            readonly detail?: string;
        };
        readonly InvalidArgument: {
            /** @example accountId */
            readonly field: string;
            /** @example Missing required parameter */
            readonly description?: string;
        };
        readonly JointApplicant: {
            readonly firstHolderDetails?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly secondHolderDetails?: readonly components["schemas"]["AssociatedIndividual"][];
            readonly financialInformation?: readonly components["schemas"]["FinancialInformation"][];
            readonly regulatoryInformation?: readonly components["schemas"]["RegulatoryInformation"][];
            readonly regulatedMemberships?: readonly components["schemas"]["RegulatedMembership"][];
            readonly accreditedInvestorInformation?: components["schemas"]["AccreditedInvestorInformation"];
            readonly taxInformation?: components["schemas"]["IndividualTaxInformation"];
            readonly withholdingStatement?: components["schemas"]["WithholdingStatementType"];
            /** @enum {string} */
            readonly type?: "community" | "joint_tenants" | "tenants_common" | "tbe" | "au_joint_account";
        };
        readonly JoseHeader: {
            readonly empty?: boolean;
        };
        readonly JwsPayload: Record<string, never>;
        readonly LeaveDRIP: {
            readonly accountId?: string;
        };
        readonly LeaveSYEP: {
            readonly accountId?: string;
        };
        readonly LegalEntity: {
            readonly name?: string;
            readonly address?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly legalEntityIdentification?: components["schemas"]["LegalEntityIdentification"];
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly id?: string;
            readonly externalId?: string;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
        };
        readonly LegalEntityIdentification: {
            readonly placeOfBusinessAddress?: components["schemas"]["Address"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly identification?: string;
            readonly identificationCountry?: string;
            readonly formationCountry?: string;
            /** @enum {string} */
            readonly formationType?: "PUBLIC" | "PRIVATE" | "OTHER";
            readonly exchangeCode?: string;
            readonly exchangeSymbol?: string;
            readonly sameMailAddress?: boolean;
        };
        /** @deprecated */
        readonly LinkDuplicateAccount: {
            readonly accountId?: string;
            readonly externalAccountId?: string;
            readonly clientActiveTrading?: boolean;
        };
        readonly LocalTaxForm: {
            /** @enum {string} */
            readonly taxAuthority?: "ISRAEL_TA" | "CANADA_TA" | "RUSSIA_TA" | "SWEDEN_TA" | "AUSTRALIA_TA";
            readonly qualified?: boolean;
            readonly treatyCountry?: string;
        };
        readonly LoginMessage: {
            /** Format: date-time */
            readonly recordDate?: string;
            /** Format: int32 */
            readonly id?: number;
            readonly username?: string;
            readonly messageType?: string;
            /** Format: int32 */
            readonly contentId?: number;
            readonly state?: string;
            readonly description?: string;
            readonly tasks?: readonly number[];
        };
        readonly LoginMessageRequest: {
            /** Format: date */
            readonly startDate: string;
            /** Format: date */
            readonly endDate: string;
            /** Format: int32 */
            readonly offset?: number;
            /** Format: int32 */
            readonly limit?: number;
            /** @enum {string} */
            readonly status?: "N" | "O" | "P" | "C" | "A" | "E" | "F" | "I" | "J" | "L" | "M" | "R" | "W" | "Q";
            readonly type?: string;
        };
        readonly LoginMessageResponse: {
            readonly accountId?: string;
            readonly clearingStatus?: string;
            readonly clearingStatusDescription?: string;
            readonly loginMessages?: readonly components["schemas"]["LoginMessage"][];
            readonly loginMessagePresent?: boolean;
        };
        readonly ManageMarketDataSubscriptions: {
            readonly service?: readonly components["schemas"]["Service"][];
            readonly referenceUserName?: string;
        };
        readonly ManagingOwner: {
            readonly externalId?: string;
            readonly is25PercentOwner?: boolean;
        };
        readonly MarkupStaircaseType: {
            readonly amount?: number;
            readonly break?: number;
        };
        readonly MissingRequiredParameterResponse: {
            /** @example /invalid-argument */
            readonly type: string;
            /** @example Bad Request */
            readonly title: string;
            /**
             * Format: int32
             * @example 400
             */
            readonly status: number;
            readonly invalidArguments?: readonly components["schemas"]["InvalidArgument"][];
        };
        readonly NAVRangeType: {
            readonly min?: number;
            readonly max?: number;
            readonly maxFee?: number;
        };
        readonly NoSuchInstructionResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Not found */
            readonly title: string;
            /**
             * Format: int32
             * @example 404
             */
            readonly status: number;
            /** @example No such instruction found */
            readonly detail?: string;
        };
        readonly NoSuchInstructionSetResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Not found */
            readonly title: string;
            /**
             * Format: int32
             * @example 404
             */
            readonly status: number;
            /** @example No such instruction set found */
            readonly detail?: string;
            /**
             * Format: int32
             * @example 8389943
             */
            readonly instructionSetId: number;
        };
        readonly NonDisclosedDetail: {
            /** @example 2023-07-08 */
            readonly tradeDate: string;
            /** @example 2023-07-18 */
            readonly settleDate: string;
            /** @example DTCYUS33XXX */
            readonly psetBic?: string;
            /** @example CH100164 */
            readonly reagDeagBic?: string;
            /** @example 320043 */
            readonly buyerSellBic?: string;
            /** @example 123456 */
            readonly memberAccountId?: string;
            /** @example 123456 */
            readonly safeKeepingAccountId?: string;
        };
        readonly ORGRegulatorType: {
            readonly regulatorName?: string;
            readonly regulatorCountry?: string;
            readonly regulatedInCapacity?: string;
            readonly regulatorId?: string;
        };
        readonly ORGRegulatoryInfoType: {
            readonly publicCompanyInfo?: components["schemas"]["PublicCompanyInfoType"];
            readonly orgRegulators?: readonly components["schemas"]["ORGRegulatorType"][];
            readonly regulated?: boolean;
            readonly public?: boolean;
        };
        readonly OrderQuantityLimit: {
            /** @enum {string} */
            readonly asset?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            /** Format: int32 */
            readonly quantity?: number;
        };
        readonly OrderValueLimits: {
            readonly maxOrderValue?: number;
            readonly maxGrossValue?: number;
            readonly maxNetValue?: number;
            readonly netContractLimit?: number;
        };
        readonly Organization: {
            readonly identification?: components["schemas"]["OrganizationIdentification"];
            readonly regulatoryInformation?: components["schemas"]["RegulatoryInformation"];
        };
        readonly OrganizationApplicant: {
            readonly identifications?: readonly components["schemas"]["OrganizationIdentification"][];
            readonly accountSupport?: components["schemas"]["AccountSupportType"];
            readonly financialInformation?: readonly components["schemas"]["FinancialInformation"][];
            readonly accreditedInvestorInformation?: components["schemas"]["AccreditedInvestorInformation"];
            readonly regulatoryInformation?: readonly components["schemas"]["RegulatoryInformation"][];
            readonly managingOwner?: components["schemas"]["ManagingOwner"];
            readonly associatedEntities?: components["schemas"]["AssociatedEntities"];
            readonly regulatedMemberships?: readonly components["schemas"]["RegulatedMembership"][];
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w8BenE?: components["schemas"]["FormW8BENE"];
            readonly w8IMY?: components["schemas"]["FormW8IMY"];
            readonly withholdingStatement?: components["schemas"]["WithholdingStatementType"];
            /** @enum {string} */
            readonly typeOfTrading?: "FIRM" | "CUSTOMER";
            /** @enum {string} */
            readonly type?: "LLC" | "CORPORATION" | "PARTNERSHIP" | "UNINCORPORATED BUSINESS";
            readonly orgUsSubsidiary?: boolean;
            readonly qualifiedIntermediary?: boolean;
            readonly assumedPrimaryReporting?: boolean;
            readonly acceptedPrimaryWithholding?: boolean;
            /** @enum {string} */
            readonly usTaxPurposeType?: "C" | "P" | "E";
        };
        readonly OrganizationIdentification: {
            readonly placeOfBusinessAddress?: components["schemas"]["Address"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly name?: string;
            readonly businessDescription?: string;
            readonly websiteAddress?: string;
            readonly identification?: string;
            readonly identificationCountry?: string;
            readonly formationCountry?: string;
            readonly formationState?: string;
            readonly sameMailAddress?: boolean;
            readonly translated?: boolean;
        };
        readonly PartialBondPosition: {
            readonly cusipNumber?: string;
            /** Format: int64 */
            readonly numberOfBonds?: number;
            readonly all?: boolean;
        };
        readonly PartialCashPosition: {
            /** Format: float */
            readonly amount?: number;
            readonly marginLoan?: boolean;
            readonly fullCash?: boolean;
        };
        readonly PartialFundPosition: {
            readonly symbol?: string;
            /** Format: int64 */
            readonly numberOfShares?: number;
            readonly all?: boolean;
        };
        readonly PartialOptionPosition: {
            readonly symbol?: string;
            /** Format: int64 */
            readonly numberOfContracts?: number;
            readonly all?: boolean;
            /** @enum {string} */
            readonly position?: "LONG" | "SHORT";
            /** @enum {string} */
            readonly optionType?: "CALL" | "PUT";
            /** Format: int64 */
            readonly strikePrice?: number;
            readonly expirationDate?: string;
        };
        readonly PartialStockPosition: {
            readonly symbol?: string;
            /** Format: int64 */
            readonly numberOfShares?: number;
            readonly all?: boolean;
            /** @enum {string} */
            readonly position?: "LONG" | "SHORT";
            readonly exchange?: string;
        };
        readonly PartialWarrantPosition: {
            readonly symbol?: string;
            /** Format: int64 */
            readonly numberOfShares?: number;
            readonly all?: boolean;
            /** @enum {string} */
            readonly position?: "LONG" | "SHORT";
            /** @enum {string} */
            readonly optionType?: "CALL" | "PUT";
            /** Format: int64 */
            readonly strikePrice?: number;
            readonly expirationDate?: string;
        };
        readonly PendingTask: {
            /** Format: int32 */
            readonly taskNumber?: number;
            /** Format: int32 */
            readonly formNumber?: number;
            readonly formName?: string;
            readonly action?: string;
            readonly externalId?: string;
            readonly state?: string;
            readonly documentRejectReason?: readonly string[];
            readonly url?: string;
            /** Format: date-time */
            readonly startDate?: string;
            /** Format: date-time */
            readonly au10tixCreatedDate?: string;
            /** Format: date-time */
            readonly au10tixExpiryDate?: string;
            /** Format: int32 */
            readonly entityId?: number;
            readonly requiredForApproval?: boolean;
            readonly onlineTask?: boolean;
            readonly requiredForTrading?: boolean;
            readonly questionIds?: readonly number[];
        };
        readonly PendingTasksResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly accountId?: string;
            readonly status?: string;
            readonly description?: string;
            readonly state?: string;
            readonly pendingTasks?: readonly components["schemas"]["PendingTask"][];
            readonly pendingTaskPresent?: boolean;
        };
        readonly PhoneInfo: {
            /** @enum {string} */
            readonly type?: "Work" | "Home" | "Fax" | "Mobile" | "Mobile (work)" | "Mobile (other)" | "Business" | "Other (voice)";
            readonly number?: string;
            readonly country?: string;
            readonly verified?: boolean;
        };
        readonly PoliticalMilitaryDiplomaticDetailsType: {
            readonly personName?: string;
            readonly title?: string;
            readonly organization?: string;
            readonly country?: string;
        };
        readonly PollingInstructionResult: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example INTERNAL_CASH_TRANSFER
             * @enum {string}
             */
            readonly instructionType: "ACH_INSTRUCTION" | "CANCEL_INSTRUCTION" | "COMPLEX_ASSET_TRANSFER" | "DELETE_BANK_INSTRUCTION" | "DEPOSIT" | "DWAC" | "EXTERNAL_POSITION_TRANSFER" | "FOP" | "QUERY_RECENT_INSTRUCTIONS" | "QUERY_WITHDRAWABLE_FUNDS" | "INTERNAL_POSITION_TRANSFER" | "INTERNAL_CASH_TRANSFER" | "MICRO_AMOUNT" | "PREDEFINED_DESTINATION_INSTRUCTION" | "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION" | "WITHDRAWAL" | "QUERY_IRA_CONTRIBUTIONS" | "EDDA_INSTRUCTION" | "QUERY_RECENT_RECURRING_EVENTS" | "QUERY_RECURRING_INSTRUCTIONS" | "QUERY_ACCOUNT_BALANCES" | "QUERY_BANK_INSTRUCTION" | "QUERY_WITHDRAWABLE_CASH_EQUITY";
            /**
             * @example PENDING
             * @enum {string}
             */
            readonly instructionStatus: "PENDING" | "REJECTED" | "PROCESSED";
            /** @example 45123654 */
            readonly instructionId: number;
            /** @example 23456745 */
            readonly ibReferenceId?: number;
            /** @example Please poll for status after 10 minutes */
            readonly description?: string;
            readonly error?: {
                readonly errorCode: string;
                readonly errorMessage: string;
            };
        };
        readonly PredefinedDestinationInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example Instruction */
            readonly bankInstructionName: string;
            /**
             * @example ACH
             * @enum {string}
             */
            readonly bankInstructionMethod: "LVP" | "SEPA" | "WIRE" | "ACH" | "CPA";
            /** @example U2323232 */
            readonly accountId: string;
            /** @example USD */
            readonly currency: string;
            readonly financialInstitution: {
                /** @example SBI BANK */
                readonly name: string;
                readonly branchCode?: string;
                /**
                 * @example BSB_AUD
                 * @enum {string}
                 */
                readonly branchCodeType?: "BSB_AUD" | "BANK_CODE_CAD" | "NONE";
                /** @example SBIN001000 */
                readonly identifier: string;
                /**
                 * @example BIC
                 * @enum {string}
                 */
                readonly identifierType: "BIC" | "IFSC";
                /** @example 132456789 */
                readonly clientAccountId: string;
            };
        };
        readonly PreviousLossesType: {
            /** Format: int32 */
            readonly loss?: number;
            /** Format: int32 */
            readonly quarter?: number;
            /** Format: int32 */
            readonly year?: number;
            readonly currency?: string;
        };
        readonly PrimaryContributorType: {
            readonly firstName?: string;
            readonly middleInitial?: string;
            readonly lastName?: string;
            /** @enum {string} */
            readonly suffix?: "Jr." | "Sr." | "I" | "II" | "III" | "IV" | "V";
            readonly employer?: string;
            readonly occupation?: string;
            readonly address?: components["schemas"]["Address"];
            readonly sourceOfFunds?: string;
        };
        readonly ProblemDetailResponse: {
            /** Format: uri */
            readonly type?: string;
            readonly title?: string;
            /** Format: int32 */
            readonly status?: number;
            readonly detail?: string;
            /** Format: uri */
            readonly instance?: string;
        };
        readonly ProcessDocuments: {
            readonly documents?: readonly components["schemas"]["Document"][];
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
        };
        readonly ProcessDocumentsPayload: {
            readonly processDocuments?: components["schemas"]["ProcessDocuments"];
        };
        readonly ProhibitedCountryQuestionnaire: {
            readonly prohibitedQuestionnaireDetails?: readonly components["schemas"]["ProhibitedQuestionnaireDetail"][];
            readonly accountId?: string;
            readonly externalId?: string;
            readonly entityId?: string;
        };
        readonly ProhibitedCountryQuestionnaireList: {
            readonly prohibitedQuestionnaireDetail?: readonly components["schemas"]["ProhibitedQuestionnaireDetail"][];
            readonly accountId?: string;
            readonly externalId?: string;
            readonly entityId?: string;
        };
        readonly ProhibitedQuestionnaireDetail: {
            /** @enum {string} */
            readonly code?: "PASSPORT" | "CITIZENSHIP" | "BUSINESSDEALINGS" | "FINANCIALACCOUNTS" | "RESIDENT" | "MULTI" | "BIRTH";
            readonly status?: boolean;
            readonly details?: string;
        };
        readonly PublicCompanyInfoType: {
            readonly exchangeTradedOn?: string;
            readonly quotedSymbol?: string;
        };
        readonly QualifiedPurchaser: {
            readonly qualifiedPurchaserDetails?: readonly components["schemas"]["QualifiedPurchaserDetails"][];
            readonly status?: boolean;
        };
        readonly QualifiedPurchaserDetails: {
            /** @enum {string} */
            readonly code?: "InvestmentCompanyAct" | "DiscretionaryBasis";
            readonly status?: boolean;
        };
        readonly QueryAccountBalancesResult: {
            /** @example U4567 */
            readonly accountId: string;
            /** @example USD */
            readonly currency: string;
            /** @example 1234 */
            readonly withdrawableAmount: number;
            /** @example 1234 */
            readonly transferableAmount: number;
            readonly clientBankAccountWithdrawableBalance: readonly unknown[];
        } & components["schemas"]["InstructionResult"];
        readonly QueryBankInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
            /**
             * @example WIRE
             * @enum {string}
             */
            readonly bankInstructionMethod: "ACH" | "WIRE" | "USACH" | "CAACH" | "SEPA" | "eDDA" | "eGIRO" | "OPEN_BANKING";
        };
        readonly QueryBankInstructionResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryBankInstructionResult"];
        };
        readonly QueryBankInstructionResult: {
            readonly accountId: string;
            /** @enum {string} */
            readonly bankInstructionMethod: "WIRE" | "ACH" | "USACH" | "CAACH" | "SEPA" | "eDDA" | "eGIRO" | "OPEN_BANKING";
            readonly bankInstructionDetails: readonly {
                /** @example testinstr */
                readonly instructionName: string;
                /** @example CREDIT */
                readonly type: string;
                /** @example USD */
                readonly currency: string;
                /** @example PROCESSED */
                readonly instructionStatus: string;
                /** @example 000000000 */
                readonly bankRoutingNumber: string;
                /** @example *****0000 */
                readonly bankAccountNumber: string;
            }[];
        } & components["schemas"]["InstructionResult"];
        readonly QueryIRAContributions: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
            /** @example 2003 */
            readonly year: string;
        };
        readonly QueryIRAContributionsResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryIRAContributionsResult"];
        };
        readonly QueryIRAContributionsResult: components["schemas"]["PollingInstructionResult"] & {
            readonly accountId: string;
            readonly year: string;
            readonly iraType: string;
            readonly contributions: readonly {
                readonly maximumContributionLimit: number;
                readonly yearToDateContribution: number;
                readonly allowedContributionLimit: number;
            }[];
        };
        readonly QueryRecentInstructionResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryRecentInstructionResult"];
        };
        readonly QueryRecentInstructionResult: components["schemas"]["PollingInstructionResult"] & {
            readonly instructionHistory: {
                /** Format: int32 */
                readonly historyMaxDepthNumberOfDays: number;
                /** Format: int32 */
                readonly historyMaxDepthNumberOfInstruction: number;
                readonly result: readonly unknown[];
            };
        };
        readonly QueryRecentInstructions: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
            readonly transactionHistory: {
                /** @example 5 */
                readonly daysToGoBack: number;
                /**
                 * @example INTERNAL_CASH_TRANSFER
                 * @enum {string}
                 */
                readonly transactionType?: "ALL" | "ACH_INSTRUCTION" | "PREDEFINED_DESTINATION_INSTRUCTION" | "WITHDRAWAL" | "DEPOSIT" | "DWAC" | "FOP" | "EDDA_INSTRUCTION" | "TRADITIONAL_BANK_INSTRUCTION_VERIFICATION" | "CANCEL_INSTRUCTION" | "DELETE_BANK_INSTRUCTION" | "EXTERNAL_POSITION_TRANSFER" | "INTERNAL_CASH_TRANSFER" | "INTERNAL_POSITION_TRANSFER" | "COMPLEX_ASSET_TRANSFER";
            };
        };
        readonly QueryRecentRecurringEventResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryRecentRecurringEventResult"];
        };
        readonly QueryRecentRecurringEventResult: {
            readonly recurringInstructionName: string;
            readonly recurringTransactionType: string;
            readonly recurringTransactionStatus: string;
            readonly amount: number;
            readonly currency: string;
            readonly method: string;
            readonly transactionHistory: {
                /** Format: int32 */
                readonly maxNumberOfTransactions?: number;
                readonly result?: readonly {
                    /** Format: int32 */
                    readonly ibRequestId?: number;
                    readonly status?: string;
                }[];
            };
        } & components["schemas"]["InstructionResult"];
        readonly QueryRecentRecurringEvents: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example -343872793 */
            readonly ibReferenceId: number;
            /** @example 15 */
            readonly numberOfTransactions?: number;
        };
        readonly QueryRecurringInstructions: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
        };
        readonly QueryRecurringInstructionsResponse: {
            readonly instructionResult?: components["schemas"]["QueryRecurringInstructionsResult"];
        };
        readonly QueryRecurringInstructionsResult: {
            readonly accountId: string;
            readonly recurringInstructions: readonly {
                /** Format: int32 */
                readonly requestId?: number;
                readonly bankInstructionName?: string;
                readonly transactionType?: string;
                readonly bankInstructionMethod?: string;
                readonly amount?: number;
                readonly currency?: string;
                readonly frequency?: string;
                readonly startDate?: string;
                readonly endDate?: string;
            }[];
        } & components["schemas"]["InstructionResult"];
        readonly QueryWithdrawableAmountsInstructionResult: components["schemas"]["PollingInstructionResult"] & {
            readonly accountId: string;
            readonly currency: string;
            readonly withdrawableAmount: number;
            readonly withdrawableAmountNoBorrow: number;
            readonly allowedTransferAmountToMaster: number;
            readonly allowedTransferAmountToMasterNoBorrow: number;
        };
        readonly QueryWithdrawableAmountsResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryWithdrawableAmountsInstructionResult"];
        };
        readonly QueryWithdrawableAmountsWithoutOriginHoldResponse: components["schemas"]["InstructionPollingResponse"] & {
            readonly instructionResult?: components["schemas"]["QueryWithdrawableAmountsWithoutOriginHoldResult"];
        };
        readonly QueryWithdrawableAmountsWithoutOriginHoldResult: components["schemas"]["PollingInstructionResult"] & {
            readonly accountId: string;
            readonly currency: string;
            readonly withdrawableAmountWithoutOriginationHold: number;
            readonly withdrawableAmountWithoutOriginationHoldNoBorrow: number;
        };
        readonly QueryWithdrawableCashEquityResult: components["schemas"]["PollingInstructionResult"] & {
            readonly accountId: string;
            readonly currency: string;
            readonly withdrawableCashAmount: number;
            readonly availableEquityValue: number;
        };
        readonly QueryWithdrawableFunds: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U399192 */
            readonly accountId: string;
            /** @example USD */
            readonly currency: string;
            /**
             * @description If bankRoutingNumber is provided then bankAccountNumber is also required, cannot be passed with bankInstructionName
             * @example 122199983
             */
            readonly bankRoutingNumber?: string;
            /**
             * @description If bankAccountNumber is provided then bankRoutingNumber is also required, cannot be passed with bankInstructionName
             * @example 9876543210
             */
            readonly bankAccountNumber?: string;
            /**
             * @description bankInstructionName cannot be passed with (bankAccountNumber or bankRoutingNumber)
             * @example test
             */
            readonly bankInstructionName?: string;
        } & unknown;
        readonly Questionnaire: {
            readonly answers?: readonly components["schemas"]["Answer"][];
            /** Format: int32 */
            readonly formNumber?: number;
        };
        readonly QuestionnaireResponse: {
            /** Format: int64 */
            readonly questionId?: number;
            readonly question?: string;
            readonly isMandatoryToAnswer?: boolean;
            readonly questionType?: string;
            readonly answers?: readonly components["schemas"]["AnswerResponse"][];
        };
        readonly QuestionnaireType: {
            /** Format: int32 */
            readonly formNumber?: number;
            readonly detail?: string;
        };
        readonly Questionnaires: {
            readonly questionnaire?: readonly components["schemas"]["Questionnaire"][];
            readonly accountId?: string;
        };
        readonly QuizQuestionnaires: {
            readonly questionnaire?: readonly components["schemas"]["Questionnaire"][];
            readonly accountId?: string;
            readonly task?: readonly components["schemas"]["Task"][];
        };
        readonly RecurringInstructionDetail: {
            /** @example Arkansas-Test */
            readonly instructionName: string;
            /**
             * @example MONTHLY
             * @enum {string}
             */
            readonly frequency: "MONTHLY" | "QUARTERLY" | "YEARLY";
            /** @example 2023-10-16 */
            readonly startDate: string;
            /** @example 2023-10-16 */
            readonly endDate?: string;
        };
        readonly RegisteredClient: {
            /** Format: int32 */
            readonly id?: number;
            readonly client_id?: string;
            readonly client_name?: string;
            /** @enum {string} */
            readonly client_category?: "DIRECT" | "THIRD_PARTY";
            /** @enum {string} */
            readonly client_type?: "CONFIDENTIAL" | "PUBLIC" | "TEST";
            /** @enum {string} */
            readonly client_status?: "REQUESTED" | "ACTIVE" | "REVOKED" | "UNKNOWN";
            readonly redirect_uris?: readonly string[];
            readonly jwks?: components["schemas"]["ClientPublicKeySet"];
            readonly description?: string;
            readonly client_uri?: string;
            readonly logo_uri?: string;
            readonly policy_uri?: string;
            readonly account_id?: string;
            readonly csid?: string;
            readonly allowed_grant_types?: readonly ("client_credentials" | "authorization_code" | "refresh_token")[];
            readonly configuration?: components["schemas"]["ClientConfiguration"];
            /** Format: date-time */
            readonly created_at?: string;
        };
        readonly RegisteredScope: {
            /** Format: int32 */
            readonly id?: number;
            readonly name?: string;
            readonly friendly_name?: string;
            readonly description?: string;
            /** Format: int64 */
            readonly defaultTokenDurationSeconds?: number;
        };
        readonly RegisteredScopeSet: {
            readonly scopes?: readonly components["schemas"]["RegisteredScope"][];
        };
        readonly RegistrationTask: {
            readonly externalId?: string;
            /** Format: int32 */
            readonly formNumber?: number;
            readonly formName?: string;
            readonly action?: string;
            /** Format: date-time */
            readonly dateCompleted?: string;
            readonly state?: string;
            readonly questionIds?: readonly number[];
            readonly warning?: string;
            readonly isRequiredForApproval?: boolean;
            readonly isCompleted?: boolean;
            readonly isDeclined?: boolean;
        };
        readonly RegistrationTasksResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly accountId?: string;
            readonly status?: string;
            readonly description?: string;
            readonly state?: string;
            readonly registrationTaskPresent?: boolean;
            readonly registrationTasks?: readonly components["schemas"]["RegistrationTask"][];
        };
        readonly RegulatedMembership: {
            readonly organizationCode?: string;
            readonly membershipId?: string;
        };
        readonly RegulatoryDetail: {
            /** @enum {string} */
            readonly code?: "CRIMINAL" | "AFFILIATION" | "CFTCREGISTERED" | "IBACCOUNTS" | "REGULATORYCONTROL" | "EmployeePubTrade" | "ControlPubTraded" | "BROKERDEALER" | "EXCHANGEMEMBERSHIP" | "STOCKCONTROL" | "DISPUTE" | "INVESTIGATION" | "MEMBERSHIP" | "AUSEXPOSURE" | "CONTROLLER" | "POLITICALMILITARYDIPLOMATIC" | "FOREIGN_BANK" | "BROKER_DEALER" | "FUTURES_COMMISSION_MERCHANT" | "MUTUAL_FUND" | "FOREIGN_EXCHANGE" | "MONEY_TRANSMITTER" | "EMPLOYEE_BENEFIT_PLAN" | "US_BANK" | "US_SWAP_DEALER" | "US_SWAP_PARTICIPANT" | "US_INSURANCE_COMPANY" | "NON_US_INSURANCE_COMPANY" | "US_DEPT" | "FINANCIAL_ADVISOR" | "HIGH_RISK_CONTRIBUTION";
            readonly status?: boolean;
            readonly details?: string;
            readonly detail?: string;
            readonly externalIndividualId?: string;
        };
        readonly RegulatoryInformation: {
            readonly regulatoryDetails?: readonly components["schemas"]["RegulatoryDetail"][];
            readonly regulatoryDetail?: readonly components["schemas"]["RegulatoryDetail"][];
            readonly selfRegulatedMembership?: components["schemas"]["SelfRegulatedMembershipType"];
            readonly affiliationDetails?: components["schemas"]["AffiliationDetailsType"];
            readonly financialOrgTypes?: readonly string[];
            readonly orgRegulatoryInfo?: components["schemas"]["ORGRegulatoryInfoType"];
            readonly ausExposureDetails?: components["schemas"]["AUSExposureDetailsType"];
            readonly controllerExchangeCode?: string;
            readonly politicalMilitaryDiplomaticDetails?: components["schemas"]["PoliticalMilitaryDiplomaticDetailsType"];
            readonly translated?: boolean;
        };
        readonly RemoveTradingPermissions: {
            readonly tradingPermissions?: readonly components["schemas"]["TradingPermission"][];
            readonly accountId?: string;
        };
        readonly ReopenAccount: {
            readonly accountId?: string;
        };
        readonly RepDetail: {
            readonly repId?: string;
            /** Format: int32 */
            readonly percentage?: number;
        };
        readonly RepresentativeDetail: {
            readonly representativeId?: string;
            /** Format: int32 */
            readonly percentage?: number;
        };
        readonly RequestDetail: {
            /** Format: int64 */
            readonly requestId?: number;
            readonly dateSubmitted?: string;
            readonly status?: string;
            readonly accountID?: string;
            readonly requestType?: string;
        };
        readonly RequestDetailsRequest: {
            /** Format: date */
            readonly startDate: string;
            /** Format: date */
            readonly endDate: string;
            /** Format: int32 */
            readonly offset?: number;
            /** Format: int32 */
            readonly limit?: number;
            /** @enum {string} */
            readonly status?: "N" | "O" | "P" | "C" | "A" | "E" | "F" | "I" | "J" | "L" | "M" | "R" | "W" | "Q";
        };
        readonly RequestDetailsResponse: {
            readonly requestDetails?: readonly components["schemas"]["RequestDetail"][];
            /** Format: int32 */
            readonly offset?: number;
            /** Format: int32 */
            readonly limit?: number;
            /** Format: int32 */
            readonly total?: number;
        };
        readonly RequestInfoResponse: {
            /** Format: int64 */
            readonly requestId?: number;
            readonly executedAt?: string;
        };
        readonly ResetAbandonedAccount: {
            readonly accountId?: string;
        };
        /** @description Provide the residential address where the applicant physically resides. <br><ul><li>If the mailing address is different from the address provided in Residence element, THEN you will also include MailingAddress element.</li><li>Post Office Box is not accepted for Residential Address.</li><li>Our system validates street_1 and street_2 included within Residence attribute to ensure Post Office Box address is not provided.</li><li>An error will be thrown if the below combinations are included within street_1 OR street_2:</li><ul><li>PB</li><li>PO Box</li><li>Post Office Box</li><li>P.O. Box</li><li>In care of</li><li>General Delivery</li><li>Regular Expression to validate street_1 and street_2:</li></ul></ul>English: (?:P(?:ost(?:al)?)?[\.\-\s]*(?:(?:O(?:ffice)?[\.\s]*)?B(?:ox|in|\b|\d)|o(?:ffice|\b)(?:[-\s]*\d)|code)|box[-\s]*\d)<br>Chinese Simplified: PO Box    (?i)\b((邮政信箱) [0-9]*)\bChinese Traditional: PO Box   (?i)\b((郵政信箱) [0-9]*)\b */
        readonly ResidenceAddress: {
            /**
             * @description Street which applicant resides
             * @example 1 Tester Street
             */
            readonly street1?: string;
            /** @description Street which applicant resides */
            readonly street2?: string;
            /**
             * @description City which the applicant resides.
             * @example London
             */
            readonly city?: string;
            /**
             * @description State/Province which the applicant resides.
             * @example GB-ENG
             */
            readonly state?: string;
            /**
             * @description Country which the applicant resides.
             * @example GBR
             */
            readonly country?: string;
            /**
             * @description Postal / Zip code.For countries that do not provide postal code, please enter 00000
             * @example SW10 9QL
             */
            readonly postalCode?: string;
        };
        readonly ResponseFileResponse: {
            readonly isProcessed?: boolean;
            readonly name?: string;
            readonly data?: Record<string, never>;
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
        };
        readonly RestrictionInfo: {
            /** Format: int32 */
            readonly id?: number;
            readonly byIB?: boolean;
            readonly name?: string;
        };
        readonly SOIQuestionnaire: {
            readonly details?: string;
        };
        readonly SecurityQuestions: {
            readonly details?: readonly components["schemas"]["Details"][];
            readonly referenceUserName?: string;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
        };
        readonly SelfRegulatedMembershipType: {
            readonly exchanges?: string;
            readonly organizations?: string;
        };
        readonly ServerPublicKey: {
            readonly keyId?: string;
            /** Format: int32 */
            readonly keyBitSize?: number;
            readonly symmetric?: boolean;
            readonly public?: boolean;
            readonly private?: boolean;
            readonly asymmetric?: boolean;
            readonly empty?: boolean;
        };
        readonly Service: {
            /** Format: int32 */
            readonly value?: number;
            /** @enum {string} */
            readonly action?: "ADD" | "REMOVE";
        };
        readonly SignedJwtEchoRequest: {
            /** @example prodtester */
            readonly iss?: string;
        };
        readonly SourceOfIncomeType: {
            /** @enum {string} */
            readonly sourceType?: "CONSULTING" | "DISABILITY" | "INHERITANCE" | "INTEREST" | "REALESTATE" | "RENTAL" | "SEVERANCE" | "SPOUSE" | "TRADINGANDINVESTMENTS" | "PENSIONANDSOCIALSECURITY" | "UNEMPLOYMENT" | "OTHER";
            /** Format: int32 */
            readonly percentage?: number;
            readonly description?: string;
        };
        readonly SourceOfWealthType: {
            /** @enum {string} */
            readonly sourceType?: "SOW-IND-Allowance" | "SOW-IND-Disability" | "SOW-IND-Income" | "SOW-IND-Inheritance" | "SOW-IND-Interest" | "SOW-IND-MarketProfit" | "SOW-IND-Other" | "SOW-IND-Pension" | "SOW-IND-Property" | "SOW-ORG-Business" | "SOW-ORG-MarketTradingProfits" | "SOW-ORG-Other" | "SOW-ORG-OwnerEquity" | "SOW-ORG-Property" | "SOW-ORG-RetainedEarnings";
            /** Format: int32 */
            readonly percentage?: number;
            readonly usedForFunds?: boolean;
            readonly description?: string;
        };
        readonly StatusResponse: {
            /** Format: int64 */
            readonly requestId?: number;
            /** Format: date-time */
            readonly dateSubmitted?: string;
            readonly fileData?: components["schemas"]["FileData"];
        };
        readonly StmtRequest: {
            /** @description account id */
            readonly accountId: string;
            /**
             * @description array of account id's
             * @example [
             *       "U123",
             *       "U456"
             *     ]
             */
            readonly accountIds?: readonly string[];
            /** @description from date */
            readonly startDate: string;
            /** @description to date */
            readonly endDate: string;
            /** @description possible values are consolidate, concatenate, or customConsolidate */
            readonly multiAccountFormat?: string;
            /**
             * @description crypto consolidate flag, If request contains any accounts with crypto segment, will turn request into Crypto Consolidated
             * @default false
             */
            readonly cryptoConsolIfAvailable: boolean;
            /**
             * @description output format
             * @example application/pdf, text/html, or text/csv
             */
            readonly mimeType?: string;
            /**
             * @description two character ISO language code
             * @default en
             * @example en, fr defaults to en (english)
             */
            readonly language: string;
            /**
             * @description to gzip the whole response pass true
             * @default false
             */
            readonly gzip: boolean;
        };
        readonly SynchronousInstructionResponse: components["schemas"]["InstructionResponse"];
        readonly Task: {
            /** Format: int32 */
            readonly formNumber?: number;
            readonly status?: boolean;
        };
        readonly TaxFormRequest: {
            /**
             * @description Account id
             * @example UXXXX
             */
            readonly accountId: string;
            /**
             * Format: int32
             * @description Tax Year
             * @example 2023
             */
            readonly year: number;
            /**
             * @description Tax Form Type (can retrieve available tax documents via /api/v1/tax-documents/available)
             * @example ALL,1099,1099R,1042S,8949
             */
            readonly type: string;
            /**
             * @description format
             * @example HTML,CSV,PDF
             */
            readonly format: string;
            /**
             * @description to gzip the whole response pass true
             * @default false
             */
            readonly gzip: boolean;
        };
        readonly TaxFormResponse: {
            readonly data?: {
                /** @description the data type of the value after decoding */
                readonly dataType?: string;
                /** @description encoding used for the value */
                readonly encoding?: string;
                /** @description Base 64 encoded String of byte[]. Byte[] represents compressed data when gzip is true */
                readonly value?: string;
                /** @description mimeType of document after decoding and serializing the value */
                readonly mimeType?: string;
                /** @description content encoding flag. Represents whether the response is compressed */
                readonly gzip?: boolean;
                /** @description specify response media types that are acceptable */
                readonly accept?: string;
            };
        };
        readonly TaxFormType: {
            readonly isForm?: boolean;
            /** @example 1099 */
            readonly taxFormName?: string;
            /** @description available tax form formats */
            readonly formats?: readonly string[];
        };
        readonly TaxPayerDetails: {
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly userName?: string;
        };
        readonly TaxResidency: {
            readonly country?: string;
            readonly tin?: string;
            /** @enum {string} */
            readonly tinType?: "SSN" | "EIN" | "NonUS_NationalId";
        };
        readonly Title: {
            readonly value?: string;
            /** @enum {string} */
            readonly code?: "Account Holder" | "FIRST HOLDER" | "SECOND HOLDER" | "TRADER" | "CEO" | "SECRETARY" | "TREASURER" | "OWNER" | "PRINCIPAL" | "SHAREHOLDER" | "TRUSTEE" | "BENEFICIARY" | "GRANTOR" | "Employee" | "CONTINGENT" | "IRA_BENEFICIARY" | "IRA DECEDENT" | "COMP_OFFICER" | "Other Officer" | "Controlling Officer" | "SIGNATORY" | "NON-EMPLOYEE" | "CUSTODIAN" | "SUCCESSOR_CUSTODIAN" | "DIRECTOR" | "PARTNER" | "CUSTODIAN EMPLOYEE" | "SUCCESSOR CUSTODIAN EMPLOYEE" | "SPOUSE" | "Successor Holder" | "Registered Contact";
        };
        readonly TokenRequest: {
            readonly clientAssertion?: string;
            readonly clientAssertionType?: string;
        };
        readonly TokenResponse: {
            /** @description The serialized access token */
            readonly access_token?: string;
            /** @description The serialized refresh token if applicable */
            readonly refresh_token?: string;
            /** @description The serialized ID token if applicable */
            readonly id_token?: string;
            /** @description The token type (e.g., Bearer) */
            readonly token_type?: string;
            /** @description The space-delimited list of granted scopes */
            readonly scope?: string;
            /**
             * Format: int64
             * @description The number of seconds from now until the access token expires
             */
            readonly expires_in?: number;
        };
        readonly TradeConfirmationRequest: {
            /**
             * @description accound id
             * @example UXXXX
             */
            readonly accountId: string;
            /**
             * @description from date
             * @example 20230102
             */
            readonly startDate: string;
            /**
             * @description to date
             * @example 20230115
             */
            readonly endDate: string;
            /**
             * @description output format
             * @example application/pdf
             */
            readonly mimeType?: string;
        };
        readonly TradeConfirmationResponse: {
            readonly data?: {
                /** @description the data type of the value after decoding */
                readonly dataType?: string;
                /** @description encoding used for the value */
                readonly encoding?: string;
                /** @description Base 64 encoded String of byte[]. Byte[] represents compressed data when gzip is true */
                readonly value?: string;
                /** @description mimeType of document after decoding and serializing the value */
                readonly mimeType?: string;
                /** @description content encoding flag. Represents whether the response is compressed */
                readonly gzip?: boolean;
                /** @description specify response media types that are acceptable */
                readonly accept?: string;
            };
        };
        readonly TradingInstrument: {
            /** @example USD */
            readonly currency: string;
        } & ({
            /** @example 459200101 */
            readonly conid: number;
        } | {
            readonly tradingInstrumentDescription: {
                /**
                 * @example ISIN
                 * @enum {string}
                 */
                readonly securityIdType: "CUSIP" | "ISIN" | "CASH";
                /** @example 459200101 */
                readonly securityId: string;
                /**
                 * @example STK
                 * @enum {string}
                 */
                readonly assetType: "STK" | "CASH" | "UNKNOWN" | "BILL" | "BOND" | "FUND" | "OPT" | "WAR";
            };
        });
        readonly TradingLimits: {
            readonly orderValueLimits?: components["schemas"]["OrderValueLimits"];
            readonly efpQuantityLimits?: components["schemas"]["EFPQuantityLimits"];
            readonly orderQuantityLimits?: readonly components["schemas"]["OrderQuantityLimit"][];
            readonly dayQuantityLimits?: readonly components["schemas"]["DayQuantityLimit"][];
        };
        readonly TradingPermission: {
            /** @enum {string} */
            readonly assetClass?: "BILL" | "BOND" | "CASH" | "CFD" | "COMB" | "FOP" | "FUND" | "FUT" | "OPT" | "SSF" | "STK" | "WAR" | "MRGN" | "CLP";
            readonly exchangeGroup?: string;
            /** @enum {string} */
            readonly country?: "ALL" | "AUSTRALIA" | "AUSTRIA" | "BELGIUM" | "CANADA" | "FRANCE" | "GERMANY" | "HONG KONG" | "ITALY" | "JAPAN" | "KOREA" | "MEXICO" | "NORWAY" | "SINGAPORE" | "SPAIN" | "SWEDEN" | "SWITZERLAND" | "THE NETHERLANDS" | "UNITED KINGDOM" | "UNITED STATES" | "HK-CHINA";
            /** @enum {string} */
            readonly product?: "BONDS" | "FUTURES" | "FOREX" | "FUTURES OPTIONS" | "MUTUAL FUNDS" | "STOCKS" | "SINGLE STOCK FUTURES" | "OPTIONS" | "STOCK OPTIONS" | "WARRANTS";
        };
        readonly TraditionalBankInstructionVerification: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /**
             * @example ACHUS
             * @enum {string}
             */
            readonly bankInstructionCode: "USACH" | "CAACH" | "ACHUS" | "WIRE";
            /** @example TestInstr */
            readonly bankInstructionName: string;
            /** @example U453454 */
            readonly accountId: string;
            /** @example 35354345 */
            readonly pendingInstructionId: number;
            /** @example 1 */
            readonly creditAmount1: number;
            /** @example 2 */
            readonly creditAmount2: number;
        };
        readonly Trust: {
            readonly identification?: components["schemas"]["TrustIdentification"];
            readonly regulatoryInformation?: components["schemas"]["RegulatoryInformation"];
        };
        readonly TrustApplicant: {
            readonly identification?: readonly components["schemas"]["TrustIdentification"][];
            readonly financialInformation?: readonly components["schemas"]["FinancialInformation"][];
            readonly regulatoryInformation?: readonly components["schemas"]["RegulatoryInformation"][];
            readonly regulatedMemberships?: readonly components["schemas"]["RegulatedMembership"][];
            readonly accreditedInvestorInformation?: components["schemas"]["AccreditedInvestorInformation"];
            readonly trustees?: components["schemas"]["TrusteesType"];
            readonly beneficiaries?: components["schemas"]["AssociationTypeEntities"];
            readonly grantors?: components["schemas"]["AssociationTypeEntities"];
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w8BenE?: components["schemas"]["FormW8BENE"];
            readonly w8IMY?: components["schemas"]["FormW8IMY"];
            readonly withholdingStatement?: components["schemas"]["WithholdingStatementType"];
            readonly thirdPartyManagement?: boolean;
            /** @enum {string} */
            readonly trustType?: "COMPLEX_TRUST" | "SINGLE_TRUST" | "GRANTOR_TRUST" | "US_TAXABLE_TRUST";
        };
        readonly TrustIdentification: {
            readonly address?: components["schemas"]["Address"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly name?: string;
            readonly description?: string;
            /** @enum {string} */
            readonly typeOfTrust?: "IRREVOC" | "SMSF" | "REVOCABLE" | "TESTAMENTARY" | "RETIREMENT" | "ERISA" | "OTHER";
            readonly purposeOfTrust?: string;
            /** Format: date */
            readonly dateFormed?: string;
            readonly formationCountry?: string;
            readonly formationState?: string;
            readonly registrationNumber?: string;
            /** @enum {string} */
            readonly registrationType?: "SSN" | "EIN" | "NonUS_NationalId";
            readonly registrationCountry?: string;
            readonly sameMailAddress?: boolean;
            readonly translated?: boolean;
        };
        readonly TrusteeEntityType: {
            readonly legalEntity?: components["schemas"]["LegalEntity"];
            readonly employees?: readonly components["schemas"]["Individual"][];
        };
        readonly TrusteeIndividual: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            readonly nfaRegistered?: boolean;
            readonly nfaRegistrationNumber?: string;
        };
        readonly TrusteesType: {
            readonly individuals?: readonly components["schemas"]["TrusteeIndividual"][];
            readonly entities?: readonly components["schemas"]["TrusteeEntityType"][];
        };
        readonly UnauthorizedAccessResponse: {
            /** @example /simple */
            readonly type: string;
            /** @example Unauthorized */
            readonly title: string;
            /**
             * Format: int32
             * @example 402
             */
            readonly status: number;
            /** @example The request cannot be fulfilled for the account */
            readonly detail?: string;
        };
        readonly UpdateAccountAlias: {
            readonly accountId?: string;
            readonly accountAlias?: string;
        };
        readonly UpdateAccountRepresentatives: {
            readonly representativeDetails?: readonly components["schemas"]["RepresentativeDetail"][];
            readonly accountId?: string;
        };
        readonly UpdateBCAN: {
            readonly accountId?: string;
            readonly bcan?: string;
            readonly ceNumber?: string;
        };
        readonly UpdateCredentials: {
            readonly updateEmail?: components["schemas"]["UpdateEmail"];
            readonly updatePassword?: components["schemas"]["UpdatePassword"];
            readonly accountId?: string;
            readonly referenceUserName?: string;
        };
        readonly UpdateEmail: {
            readonly email?: string;
            readonly token?: string;
            readonly access?: boolean;
            readonly externalId?: string;
            readonly entityId?: string;
        };
        readonly UpdateEntity: {
            readonly addRelationships?: readonly components["schemas"]["AddRelationship"][];
            readonly deleteRelationships?: readonly components["schemas"]["DeleteRelationship"][];
            readonly individual?: components["schemas"]["Individual"];
            readonly legalEntity?: components["schemas"]["LegalEntity"];
            readonly trust?: components["schemas"]["Trust"];
            readonly organization?: components["schemas"]["Organization"];
            readonly documents?: readonly components["schemas"]["Document"][];
            /** Format: int32 */
            readonly ibEntityId?: number;
        };
        readonly UpdateExternalId: {
            readonly accountId?: string;
            readonly newExternalId?: string;
        };
        readonly UpdatePassword: {
            readonly encryptedPassword?: string;
            readonly encryptedKeyName?: string;
            readonly token?: string;
        };
        readonly UpdatePropertyProfile: {
            readonly accountId?: string;
            readonly propertyProfile?: string;
        };
        readonly UpdateTaxForm: {
            readonly localTaxForms?: readonly components["schemas"]["LocalTaxForm"][];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly w8BenE?: components["schemas"]["FormW8BENE"];
            readonly w9?: components["schemas"]["FormW9"];
            readonly translation?: boolean;
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly accountId?: string;
            readonly documents?: readonly components["schemas"]["Document"][];
            readonly entityId?: string;
            readonly externalId?: string;
        };
        readonly UpdateUserAccessRights: {
            readonly subAccounts?: readonly string[];
            readonly repId?: string;
            readonly action?: string;
        };
        /**
         * @deprecated
         * @description Use UpdateTaxForm instead.
         */
        readonly UpdateW8BEN: {
            readonly taxPayerDetails?: components["schemas"]["TaxPayerDetails"];
            readonly documents?: readonly components["schemas"]["Document"][];
            /** @enum {string} */
            readonly inputLanguage?: "en" | "zh-Hans" | "ja" | "ru" | "fr" | "pt" | "es" | "it" | "ar-AE" | "de" | "he-IL" | "hu";
            readonly translation?: boolean;
            readonly accountId?: string;
        };
        readonly UpdateWithholdingStatement: {
            readonly accountId?: string;
            /** @enum {string} */
            readonly fatcaCompliantType?: "FATCA_COMPLIANT" | "NON_CONSENTING_US_ACCOUNT" | "NON_COOPERATIVE_ACCOUNT";
            readonly usIncomeTax?: boolean;
            readonly treatyCountry?: string;
            readonly certW8Imy?: boolean;
            /** Format: date */
            readonly effectiveDate?: string;
        };
        readonly User: {
            readonly userPrivileges?: readonly components["schemas"]["UserPrivilege"][];
            readonly mdServices?: readonly number[];
            readonly id?: string;
            readonly externalUserId?: string;
            readonly externalIndividualId?: string;
            readonly encryptedPassword?: string;
            readonly encryptedKeyName?: string;
            readonly prefix?: string;
        };
        readonly UserDetails: {
            readonly name?: components["schemas"]["IndividualName"];
            readonly nativeName?: components["schemas"]["IndividualName"];
            readonly birthName?: components["schemas"]["IndividualName"];
            readonly motherMaidenName?: components["schemas"]["IndividualName"];
            /**
             * @description Date of birth of the applicant. The applicant must be 18 years or older to open an account. <br><ul><li>If the YYY-MM-DD < 18 years error will be triggered and the account will not be created.</li><li>If YYYY-MM-DD < 21 the applicant is restricted to opening a CASH account only.</li><li>UGMA and UTMA accounts are available for minors 18 years of age or younger. An individual or entity who manages an account for a minor until that minor reaches a specific age. Available to US residents only.</li><li>This application must be opened using the front-end application which is available within the IBKR Portal.</li><li>Assets held in a single account managed by a single Custodian user.</li><li>Error will be thrown if dateOfBirth is any value other than YYYY-MM-DD.</li></ul>
             * @example 1990-08-14
             */
            readonly dateOfBirth?: string;
            readonly countryOfBirth?: string;
            readonly cityOfBirth?: string;
            /** @enum {string} */
            readonly gender?: "M" | "F" | "Male" | "Female";
            /** @enum {string} */
            readonly maritalStatus?: "S" | "M" | "W" | "D" | "C";
            /** Format: int32 */
            readonly numDependents?: number;
            readonly residenceAddress?: components["schemas"]["ResidenceAddress"];
            readonly mailingAddress?: components["schemas"]["Address"];
            readonly phones?: readonly components["schemas"]["PhoneInfo"][];
            readonly email?: string;
            readonly identification?: components["schemas"]["Identification"];
            readonly employmentType?: string;
            readonly employmentDetails?: components["schemas"]["EmploymentDetails"];
            readonly employeeTitle?: string;
            readonly taxResidencies?: readonly components["schemas"]["TaxResidency"][];
            readonly w9?: components["schemas"]["FormW9"];
            readonly w8Ben?: components["schemas"]["FormW8BEN"];
            readonly crs?: components["schemas"]["FormCRS"];
            readonly prohibitedCountryQuestionnaire?: components["schemas"]["ProhibitedCountryQuestionnaireList"];
            readonly id?: string;
            readonly externalId?: string;
            readonly userId?: string;
            readonly sameMailAddress?: boolean;
            readonly authorizedToSignOnBehalfOfOwner?: boolean;
            readonly authorizedTrader?: boolean;
            readonly usTaxResident?: boolean;
            readonly translated?: boolean;
            readonly primaryTrustee?: boolean;
            readonly ownershipPercentage?: number;
            readonly title?: readonly components["schemas"]["Title"][];
            readonly authorizedPerson?: boolean;
            readonly referenceUsername?: string;
        };
        readonly UserNameAvailableResponse: {
            readonly error?: components["schemas"]["ErrorResponse"];
            readonly hasError?: boolean;
            readonly errorDescription?: string;
            readonly isValid?: boolean;
            readonly isAvailable?: boolean;
            readonly suggestedUserName?: readonly string[];
        };
        readonly UserPrivilege: {
            readonly externalAccountId?: string;
            /** @enum {string} */
            readonly privilege?: "OWNER" | "TRADER" | "CUSTOM" | "NONE";
        };
        readonly VirtualAccountConfiguration: {
            readonly client_id?: string;
            readonly user_id?: string;
            readonly client_supports_virtual_accounts?: boolean;
            readonly account_id_mappings?: readonly components["schemas"]["VirtualAccountIdMapping"][];
        };
        readonly VirtualAccountIdMapping: {
            readonly account_id?: string;
            readonly virtual_account_id?: string;
        };
        readonly WireDetails: {
            readonly bankName?: string;
            readonly bankAccountNumber?: string;
            readonly bankCode?: string;
            readonly routingNumber?: string;
            readonly instruction?: string;
            readonly countryCode?: string;
            readonly referenceNumber?: string;
        };
        readonly WithdrawFundsInstruction: {
            /** @example 1012983 */
            readonly clientInstructionId: number;
            /** @example U46377 */
            readonly accountId: string;
            /** @example USD */
            readonly currency: string;
            /** @example 100 */
            readonly amount: number;
            /** @example Instruction */
            readonly bankInstructionName: string;
            /**
             * @example WIRE
             * @enum {string}
             */
            readonly bankInstructionMethod: "ACH" | "WIRE" | "SEPA";
            /** Format: date-time */
            readonly dateTimeToOccur?: string;
            readonly iraWithdrawalDetail?: {
                /** @example 12 */
                readonly fedIncomeTaxPercentage: number;
                /** @example 10 */
                readonly stateIncomeTaxPercentage: number;
                /** @example TE */
                readonly stateCd: string;
                /**
                 * @example NORMAL
                 * @enum {string}
                 */
                readonly iraWithholdType: "DIRECT_ROLLOVER" | "ROTH_DISTRIBUTION" | "NORMAL" | "EARLY" | "DEATH" | "EXCESS_CY" | "EXCESS_PY" | "EXCESS_SC";
            };
            readonly recurringInstructionDetail?: components["schemas"]["RecurringInstructionDetail"];
        };
        readonly WithholdingStatementType: {
            readonly accountId?: string;
            /** @enum {string} */
            readonly fatcaCompliantType?: "FATCA_COMPLIANT" | "NON_CONSENTING_US_ACCOUNT" | "NON_COOPERATIVE_ACCOUNT";
            readonly usBackupWithholding?: boolean;
            readonly treatyCountry?: string;
            readonly corporation?: boolean;
            readonly flowThrough?: boolean;
            /** Format: date */
            readonly effectiveDate?: string;
            /** Format: float */
            readonly dividendRate?: number;
            /** Format: float */
            readonly interestRate?: number;
            /** Format: float */
            readonly usOtherRate?: number;
            /** Format: float */
            readonly eciRate?: number;
        };
        readonly accountAttributes: {
            /** @description Indicates whether account has a prepaid crypto segment (Crypto Plus) with PAXOS. */
            readonly "PrepaidCrypto-P"?: boolean;
            /** @description Indicates whether account has a prepaid crypto segment (Crypto Plus) with ZEROHASH. */
            readonly "PrepaidCrypto-Z"?: boolean;
            /** @description User-defined alias assigned to the account for easy identification. */
            readonly accountAlias?: string | null;
            /** @description Indicates the identifying number for the account. */
            readonly accountId?: string;
            /**
             * Format: int32
             * @description Unix epoch timestamp of account opening.
             */
            readonly accountStatus?: number;
            /** @description A name assigned to the account, typically the account holder name or business entity. */
            readonly accountTitle?: string;
            /** @description The account's virtual account number, or otherwise its IB accountId if no VAN is set. */
            readonly accountVan?: string;
            /** @description Identifies the type of client with which the account is associated, such as an individual or LLC. */
            readonly acctCustType?: string;
            /** @description Indicates whether account can receive live orders (do not mix with paper trading). */
            readonly brokerageAccess?: boolean;
            /**
             * @description A descriptor of the nature of the account, reflecting the responsible group within IB.
             * @enum {string}
             */
            readonly businessType?: "IB_SALES" | "IB_PROSERVE";
            /** @description Designated account category. Only used in non-standard account structures. */
            readonly category?: string;
            /**
             * @description Status of the account with respect to clearing at IB. O is open, P pending, N new, A abandoned, C closed, R rejected.
             * @enum {string}
             */
            readonly clearingStatus?: "O" | "P" | "N" | "A" | "R" | "C";
            /** @description Indicates a Covestor account. */
            readonly covestor?: boolean;
            /**
             * @description Base currency of the account.
             * @enum {string}
             */
            readonly currency?: "USD";
            /** @description Internal human-readable description of the account. */
            readonly desc?: string;
            /** @description Displayed name of the account in UI. Will reflect either the accountId or accountAlias, if set. */
            readonly displayName?: string;
            /** @description Indicates that the account is managed by a financial advisor. */
            readonly faClient?: boolean;
            /**
             * @description IB business entity under which the account resides.
             * @enum {string}
             */
            readonly ibEntity?: "IBLLC-US" | "IB-CAN" | "IB-UK" | "IB-IE";
            /** @description The account's IB accountId. */
            readonly id?: string;
            /** @description Indicates that trading by the client is disabled in the account. */
            readonly noClientTrading?: boolean;
            /** @description Describes account relations in partitioned or multiplexed (segemented) account structures. */
            readonly parent?: {
                /** @description Account ID of the parent account in a multiplex account structure. */
                readonly accountId?: string;
                /** @description Indicates that the given account is a multiplex child account. */
                readonly isMChild?: boolean;
                /** @description Indicates that the given account is itself a multiplex parent account. */
                readonly isMParent?: boolean;
                /** @description Indicates that the account is a multiplex account. */
                readonly isMultiplex?: boolean;
                /** @description Money manager client. */
                readonly mmc?: readonly unknown[];
            };
            /** @description Indicates that virtual forex positions are tracked in the account. */
            readonly trackVirtualFXPortfolio?: boolean;
            /**
             * @description Internal identifier used by IB to reflect the trading permissions of the account.
             * @enum {string}
             */
            readonly tradingType?: "STKNOPT";
            /**
             * @description Indicates whether the account exists in production, paper, or demo environments.
             * @enum {string}
             */
            readonly type?: "DEMO";
        };
        /** @description Successful return contianing an array of at-a-glance account details. */
        readonly accountSummaryResponse: {
            /** @description Describes the unique account type. For standard individual accounts, an empty string is returned. */
            readonly accountType?: string;
            /** @description If the account is currently non-tradeable, a status message will be dispalyed. */
            readonly status?: string;
            /**
             * Format: int32
             * @description Returns the total account balance.
             */
            readonly balance?: number;
            /**
             * Format: int32
             * @description Simple Moving Average of the account.
             */
            readonly SMA?: number;
            /**
             * Format: int32
             * @description Total buying power available for the account.
             */
            readonly buyingPower?: number;
            /**
             * Format: int32
             * @description The amount of equity you have available for trading. For both the Securities and Commodities segments, this is calculated as: Equity with Loan Value – Initial Margin.
             */
            readonly availableFunds?: number;
            /**
             * Format: int32
             * @description The amount of cash in excess of the usual requirement in your account.
             */
            readonly excessLiquidity?: number;
            /**
             * Format: int32
             * @description The basis for determining the price of the assets in your account.
             */
            readonly netLiquidationValue?: number;
            /**
             * Format: int32
             * @description The basis for determining whether you have the necessary assets to either initiate or maintain security assets.
             */
            readonly equityWithLoanValue?: number;
            /**
             * Format: int32
             * @description The Federal Reserve Board regulation governing the amount of credit that broker dealers may extend to clients who borrow money to buy securities on margin.
             */
            readonly regTLoan?: number;
            /**
             * Format: int32
             * @description Absolute value of the Long Stock Value + Short Stock Value + Long Option Value + Short Option Value + Fund Value.
             */
            readonly securitiesGVP?: number;
            /**
             * Format: int32
             * @description Cash recognized at the time of trade + futures P&L. This value reflects real-time currency positions, including:
             *      *  Trades executed directly through the FX market.
             *      *  Trades executed as a result of automatic IB conversions, which occur when you trade a product in a non-base currency.
             *      *  Trades deliberately executed to close non-base currency positions using the FXCONV destination.
             */
            readonly totalCashValue?: number;
            /**
             * Format: int32
             * @description Accrued interest is the interest accruing on a security since the previous coupon date. If a security is sold between two payment dates, the buyer usually compensates the seller for the interest accrued, either within the price or as a separate payment.
             */
            readonly accruedInterest?: number;
            /**
             * Format: int32
             * @description The initial margin requirements calculated under US Regulation T rules for both the securities and commodities segment of your account.
             */
            readonly regTMargin?: number;
            /**
             * Format: int32
             * @description The available initial margin for the account.
             */
            readonly initialMargin?: number;
            /**
             * Format: int32
             * @description The available maintenance margin for the account.
             */
            readonly maintenanceMargin?: number;
            /** @description An array containing balance information for all currencies held by the account. */
            readonly cashBalances?: readonly {
                /** @description The currency the values represent. Base currency represented as "Total (in {BaseCurrency})" */
                readonly currency?: string;
                /**
                 * Format: int32
                 * @description The total available currency held in the account.
                 */
                readonly balance?: number;
                /**
                 * Format: int32
                 * @description The available settled cash that can be withdrawn from the account.
                 */
                readonly settledCash?: number;
            }[];
        };
        /** @description Relates a message generated in response to the rejection of the submitted order ticket. In some cases, it may also present a mechanism to resubmit the same order following a prompted decision. */
        readonly advancedOrderReject: {
            /**
             * Format: int32
             * @description The order ID assigned by IB to the rejected order ticket.
             */
            readonly orderId?: number;
            /** @description IB's internal identifier assigned to the returned message. */
            readonly reqId?: string;
            /** @description Indicates whether this prompt is dismissable. */
            readonly dismissable?: readonly unknown[];
            /** @description Human-readable text of the messages emitted by IB in response to order submission. */
            readonly text?: string;
            /** @description Choices available to the client in response to the rejection message. */
            readonly options?: readonly string[];
            /** @description The specific type of message returned. */
            readonly type?: string;
            /** @description IB internal identifier for the nature or category of the returned message. */
            readonly messageId?: string;
            /** @description Indicates that the message is a prompt offering a set of decisions, one or more of which may permit the rejected order to be resubmitted. */
            readonly prompt?: boolean;
        };
        /** @description An array containing all alerts as separate objects. */
        readonly alert: {
            /**
             * Format: int32
             * @description The order id (alert id)
             */
            readonly order_id?: number;
            /** @description The account the alert was attributed to. */
            readonly account?: string;
            /** @description The requested name for the alert. */
            readonly alert_name?: string;
            /**
             * Format: int32
             * @description Determines if the alert is active [1] or not [0]
             * @enum {integer}
             */
            readonly alert_active?: 1 | 0;
            /** @description UTC-formatted time of the alert's creation. */
            readonly order_time?: string;
            /** @description Confirms if the order is triggered or not. */
            readonly alert_triggered?: boolean;
            /**
             * Format: int32
             * @description Confirms if the alert is enabled to occur more than once.
             * @enum {integer}
             */
            readonly alert_repeatable?: 1 | 0;
        };
        readonly alertActivationRequest: {
            /**
             * Format: int32
             * @description The alert Identifier
             */
            readonly alertId: number;
            /**
             * Format: int32
             * @description Set whether or not the alert should be active (1) or inactive (0).
             * @enum {integer}
             */
            readonly alertActive: 1 | 0;
        };
        readonly alertActivationResponse: {
            /** Format: int32 */
            readonly request_id?: number;
            /**
             * Format: int32
             * @description The tracking number of the alert. Occasssionally referenced as the alertId or alert_id.
             */
            readonly order_id?: number;
            /** @description Displays result status of alert request */
            readonly success?: boolean;
            /** @description Response message to clarify success status reason. */
            readonly text?: string;
            /** @description If "success" returns false, will list failed order Ids */
            readonly failure_list?: string;
        };
        readonly alertCondition: {
            /**
             * Format: int32
             * @description The type of condition set.
             */
            readonly condition_type?: number;
            /** @description Returns conid and exchange in the format "conid@exchange" */
            readonly conidex?: string;
            /** @description Includes relevant descriptions (if applicable). */
            readonly contract_description_1?: string;
            /** @description Condition operator set for alert. */
            readonly condition_operator?: string;
            /**
             * Format: int32
             * @description TriggerMethod value set.
             */
            readonly condition_trigger_method?: number;
            /** @description Condition value set. */
            readonly condition_value?: string;
            /** @description Condition logic_bind value set. */
            readonly condition_logic_bind?: boolean;
            /** @description Condition timeZone value set. */
            readonly condition_time_zone?: string;
        };
        readonly alertCreationRequest: {
            /**
             * Format: int64
             * @description optional; used in case of modification and represent Alert Id
             */
            readonly orderId?: number;
            /** @description Alert name. */
            readonly alertName: string;
            /** @description Alert message which will be sent */
            readonly alertMessage: string;
            /**
             * Format: int32
             * @description Boolean number (0, 1) signifies if an alert can be triggered more than once. A value of '1' is required for MTA alerts
             * @enum {integer}
             */
            readonly alertRepeatable: 0 | 1;
            /** @description Email address you want to send email alerts to */
            readonly email?: string;
            /** @description Used with a tif of "GTD" only. Signifies time when the alert should terminate if no alert is triggered. */
            readonly expireTime?: string;
            /**
             * Format: int32
             * @description allow (0) or disallow (1) alerts to trigger alerts through the mobile app
             */
            readonly iTWSOrdersOnly?: number;
            /**
             * Format: int32
             * @description Allow (1) or disallow (0) the alert to be triggered outside of regular trading hours
             * @enum {integer}
             */
            readonly outsideRth: 0 | 1;
            /**
             * Format: int32
             * @description allow (1) or disallow (0) alerts to trigger email messages
             * @enum {integer}
             */
            readonly sendMessage?: 0 | 1;
            /**
             * Format: int32
             * @description allow (1) or disallow (0) alerts to trigger TWS Pop-up messages
             */
            readonly showPopup?: number;
            /**
             * @description Time in Force duration of alert.
             * @enum {string}
             */
            readonly tif: "GTC" | "GTD";
            /** @description Container for all conditions applied for an alert to trigger. */
            readonly conditions: readonly unknown[];
        };
        readonly alertCreationResponse: {
            /**
             * Format: int32
             * @description Not applicable
             */
            readonly request_id?: number;
            /**
             * Format: int32
             * @description The tracking number of the alert. Alert identifier internally referenced as order id.
             */
            readonly order_id?: number;
            /** @description Displays result status of alert request */
            readonly success?: boolean;
            /** @description Response message to clarify submission status. */
            readonly text?: string;
            /** @description Not applicable */
            readonly order_status?: string;
            /** @description Returns 'null' */
            readonly warning_message?: string;
        };
        readonly alertDeletionResponse: {
            /**
             * Format: int32
             * @description Not applicable
             */
            readonly request_id?: number;
            /**
             * Format: int32
             * @description The tracking number of the alert. Occasssionally referenced as the alertId or alert_id.
             */
            readonly order_id?: number;
            /** @description Displays result status of alert request */
            readonly success?: boolean;
            /** @description Response message to clarify success status reason. */
            readonly text?: string;
            /** @description If "success" returns false, will list failed order Ids */
            readonly failure_list?: string;
        };
        /** @description details of the specified alert */
        readonly alertDetails: {
            /** @description Requestor's account ID */
            readonly account?: string;
            /**
             * Format: int32
             * @description Alert's tracking ID. Can be used for modifying or deleting alerts.
             */
            readonly order_id?: number;
            /** @description Human readable name of the alert. */
            readonly alertName?: string;
            /** @description Time in Force effective for the Alert */
            readonly tif?: string;
            /** @description Returns the UTC formatted date used in GTD orders. */
            readonly expire_time?: string;
            /**
             * Format: int32
             * @description Returns if the alert is active [1] or disabled [0].
             * @enum {integer}
             */
            readonly alert_active?: 1 | 0;
            /**
             * Format: int32
             * @description Returns if the alert can be sent more than once.
             */
            readonly alert_repeatable?: number;
            /** @description Returns the designated email address for sendMessage functionality. */
            readonly alert_email?: string;
            /**
             * Format: int32
             * @description Returns whether or not the alert will send an email.
             */
            readonly alert_send_message?: number;
            /** @description Returns the body content of what your alert will report once triggered */
            readonly alert_message?: string;
            /**
             * Format: int32
             * @description Returns whether or not the alert will trigger TWS Pop-up messages
             */
            readonly alert_show_popup?: number;
            /**
             * Format: int32
             * @description Returns whether or not the alert will play audio
             */
            readonly alert_play_audio?: number;
            /**
             * @description represent order statusAlways returns "Presubmitted".
             * @enum {string}
             */
            readonly order_status?: "Presubmitted" | "Submitted";
            /**
             * Format: int32
             * @description Returns whether or not the alert was triggered yet.
             */
            readonly alert_triggered?: number;
            /** @description Foreground color. Not applicable to API. */
            readonly fg_color?: string;
            /** @description Background color. Not applicable to API. */
            readonly bg_color?: string;
            /** @description Returns if the order can be edited. */
            readonly order_not_editable?: boolean;
            /**
             * Format: int32
             * @description Returns whether or not the alert will trigger mobile notifications.
             */
            readonly itws_orders_only?: number;
            /** @description Returns currency set for MTA alerts. Only valid for alert type 8 & 9. */
            readonly alert_mta_currency?: string;
            /** @description Returns current MTA default values. */
            readonly alert_mta_defaults?: string;
            /**
             * Format: int32
             * @description Tracking ID for MTA alerts only. Returns 'null' for standard alerts.
             */
            readonly tool_id?: number;
            /** @description Returned for time-specific conditions. */
            readonly time_zone?: string;
            /**
             * Format: int32
             * @description Returns default type set for alerts. Configured in Client Portal.
             */
            readonly alert_default_type?: number;
            /**
             * Format: int32
             * @description Returns the total number of conditions in the alert.
             */
            readonly condition_size?: number;
            /**
             * Format: int32
             * @description Returns whether or not the alert will trigger outside of regular trading hours.
             */
            readonly condition_outside_rth?: number;
            /** @description Returns all conditions */
            readonly conditions?: readonly components["schemas"]["alertCondition"][];
        };
        readonly alerts: readonly components["schemas"]["alert"][];
        /** @description available algos */
        readonly algosResponse: {
            /** @description Contains all relevant algos for the contract. */
            readonly algos?: readonly unknown[];
        };
        readonly allocationGroup: {
            /** @description Name used to refer to your allocation group. This will be used while placing orders. */
            readonly name?: string;
            /** @description Contains a series of objects depicting which accounts are involved and, for user-defined allocation methods, the distribution value for each sub-account. */
            readonly accounts?: readonly unknown[];
            readonly default_method?: components["schemas"]["allocationMethod"];
        };
        readonly allocationGroups: {
            /** @description array, which contains all allocation groups under the advisor account */
            readonly data?: readonly unknown[];
        };
        /**
         * @description Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods:
         *       * `A` - Available Equity
         *       * `E` - Equal
         *       * `N` - Net Liquidation Value
         *
         *     User-specified allocation methods:
         *       * `C` - Cash Quantity
         *       * `P` - Percentage
         *       * `R` - Ratios
         *       * `S` - Shares
         * @default N
         * @enum {string}
         */
        readonly allocationMethod: "A" | "E" | "N" | "C" | "P" | "R" | "S";
        /** @description Contains a combined overview of Commidity, Security and Crypto fund values. */
        readonly availableFundsResponse: {
            /** @description total values */
            readonly total?: {
                /** @description Describes currently avialable funds in your account for trading. */
                readonly current_available?: string;
                /** @description Describes total value of the account. */
                readonly current_excess?: string;
                /** @description Displays predicted post-expiration account value. */
                readonly "Prdctd Pst-xpry Excss"?: string;
                /** @description This value reflects your available funds at the next margin change. */
                readonly "Lk Ahd Avlbl Fnds"?: string;
                /**
                 * @description * `Securities` - Equity with loan value. Look ahead maintenance margin.
                 *      * `Commodities` - Net Liquidation value. Look ahead maintenance margin.
                 */
                readonly "Lk Ahd Excss Lqdty"?: string;
                /** @description Describes available funds for overnight trading. */
                readonly overnight_available?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` - Equivalent to regular trading hours.
                 *        * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.
                 */
                readonly overnight_excess?: string;
                /** @description Describes the total buying power of the account including existing balance with margin. */
                readonly buying_power?: string;
                /** @description Describes the total combined leverage. */
                readonly leverage?: string;
                /** @description Describes when the next 'Look Ahead' calculation will take place. */
                readonly "Lk Ahd Nxt Chng"?: string;
                /** @description Describes the number of trades remaining before flagging the Pattern Day Trader status. "Unlimited" is used for existing Pattern Day Traders. */
                readonly day_trades_left?: string;
            };
            readonly "Crypto at Paxos"?: components["schemas"]["funds"];
            readonly commodities?: components["schemas"]["funds"];
            /** @description Contains an overview of Security specific fund values. */
            readonly securities?: {
                /** @description Describes currently avialable funds in your account for trading. */
                readonly current_available?: string;
                /** @description Describes total value of the account. */
                readonly current_excess?: string;
                /** @description Displays predicted post-expiration account value. */
                readonly "Prdctd Pst-xpry Excss"?: string;
                readonly SMA?: string;
                /** @description This value reflects your available funds at the next margin change. */
                readonly "Lk Ahd Avlbl Fnds"?: string;
                /**
                 * @description * `Securities` - Equity with loan value. Look ahead maintenance margin.
                 *      * `Commodities` - Net Liquidation value. Look ahead maintenance margin.
                 */
                readonly "Lk Ahd Excss Lqdty"?: string;
                /** @description Describes available funds for overnight trading. */
                readonly overnight_available?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` - Equivalent to regular trading hours.
                 *        * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.
                 */
                readonly overnight_excess?: string;
                /** @description Describes the total combined leverage. */
                readonly leverage?: string;
            };
        };
        readonly bondFiltersResponse: {
            /** @description Contains all filters pertaining to the given issuerId */
            readonly bondFilters?: readonly {
                /**
                 * @description An identifier used to document returned options/values. This can be thought of as a key value.
                 * @enum {string}
                 */
                readonly displayText?: "Maturity Date" | "Issue Date" | "Coupon" | "Currency";
                /**
                 * Format: int32
                 * @description Used for user interfaces. Internal use only.
                 */
                readonly columnId?: number;
                /** @description Contains all objects with values corresponding to the parent displayText key. */
                readonly options?: readonly unknown[];
            }[];
        };
        readonly brokerageSessionInitRequest: {
            /** @description publish brokerage session token at the same time when brokerage session initialized. If set false, then session token should be published before calling init. Setting true is preferred way. */
            readonly publish?: boolean;
            /** @description Determines if other brokerage sessions should be disconnected to prioritize this connection. */
            readonly compete?: boolean;
        };
        readonly brokerageSessionStatus: {
            /** @description Returns whether your brokerage session is authenticated or not. */
            readonly authenticated?: boolean;
            /** @description Returns whether you have a competing brokerage session in another connection. */
            readonly competing?: boolean;
            /** @description Returns whether you are connected to the gateway or not. */
            readonly connected?: boolean;
            /** @description A message about your authenticate status if any. */
            readonly message?: string;
            /** @description Device MAC information. */
            readonly MAC?: string;
            readonly serverInfo?: {
                /** @description IBKR server information. Internal use only. */
                readonly serverName?: string;
                /** @description IBKR version information. Internal use only. */
                readonly serverVersion?: string;
            };
            /** @description Client Portal use only. */
            readonly hardware_info?: string;
            /** @description Returns the reason for failing to retrieve authentication status. */
            readonly fail?: string;
        };
        readonly categoryTreeResponse: {
            /** @description A JSON object containing all category IDs and their relevant information. */
            readonly categories?: {
                /** @description Category identifier. */
                readonly categoryId?: {
                    /** @description Category name. */
                    readonly name?: string;
                    /** @description Identifier of parent category (if applicable). */
                    readonly parent_id?: string;
                    /** @description List of affiliated markets (if applicable). */
                    readonly markets?: readonly unknown[];
                };
            };
        };
        readonly contractInfo: {
            /** @description Classification of Financial Instrument codes */
            readonly cfi_code?: string;
            /** @description Underlying symbol */
            readonly symbol?: string;
            /** @description Returns the CUSIP for the given instrument. Only used in BOND trading. */
            readonly cusip?: string;
            /** @description Returns the expiration month of the contract. */
            readonly expiry_full?: string;
            /**
             * Format: int32
             * @description Indicates the contract identifier of the given contract.
             */
            readonly con_id?: number;
            /** @description Indicates the final maturity date of the given contract. */
            readonly maturity_date?: string;
            /** @description Specific group of companies or businesses. */
            readonly industry?: string;
            /** @description Asset class of the instrument. */
            readonly instrument_type?: string;
            /** @description Designated trading class of the contract. */
            readonly trading_class?: string;
            /** @description Comma separated list of support exchanges or trading venues. */
            readonly valid_exchanges?: string;
            /** @description Allowed to sell shares you own. */
            readonly allow_sell_long?: boolean;
            /** @description Indicates if the contract supports zero commission trading. */
            readonly is_zero_commission_security?: boolean;
            /** @description Contract's symbol from primary exchange. For options it is the OCC symbol. */
            readonly local_symbol?: string;
            readonly contract_clarification_type?: string;
            readonly classifier?: string;
            /** @description Base currency contract is traded in. */
            readonly currency?: string;
            /** @description Indicates the display name of the contract, as shown with Client Portal. */
            readonly text?: string;
            /**
             * Format: int32
             * @description Underlying contract identifier for the requested contract.
             */
            readonly underlying_con_id?: number;
            /** @description Indicates if the contract can be traded outside regular trading hours or not. */
            readonly r_t_h?: boolean;
            /** @description Indicates the multiplier of the contract. */
            readonly multiplier?: string;
            /** @description Indicates the issuer of the underlying. */
            readonly underlying_issuer?: string;
            /** @description Indicates the year and month the contract expires. */
            readonly contract_month?: string;
            /** @description Indicates the name of the company or index. */
            readonly company_name?: string;
            /** @description Indicates if the contract can be smart routed or not. */
            readonly smart_available?: boolean;
            /** @description Indicates the primary exchange for which the contract can be traded. */
            readonly exchange?: string;
            /** @description Indicates the industry category of the instrument. */
            readonly category?: string;
        };
        /** @description detailed contract information */
        readonly contractRules: {
            /** @description Indicates if the contract can trade algos or not. */
            readonly algoEligible?: boolean;
            /** @description indicates all or non option is eligible for given contract. */
            readonly allOrNoneEligible?: boolean;
            /** @description Indicates whether or not a cost report has been requested (Client Portal only). */
            readonly costReport?: boolean;
            /** @description Indicates permitted accountIDs that may trade the contract. */
            readonly canTradeAcctIds?: readonly string[];
            /** @description If rules information can not be received for any reason, it will be expressed here. */
            readonly error?: string | null;
            /** @description Indicates permitted order types for use with standard quantity trading. */
            readonly orderTypes?: readonly ("limit" | "midprice" | "market" | "stop" | "stop_limit" | "mit" | "lit" | "trailing_stop" | "trailing_stop_limit" | "relative" | "marketonclose" | "limitonclose")[];
            /** @description Indicates permitted algo types for use with the given contract. */
            readonly ibAlgoTypes?: readonly ("limit" | "stop_limit" | "lit" | "trailing_stop_limit" | "relative" | "marketonclose" | "limitonclose")[];
            /** @description Indicates permitted order types for use with fractional trading. */
            readonly fraqTypes?: readonly ("limit" | "market" | "stop" | "stop_limit" | "mit" | "lit" | "trailing_stop" | "trailing_stop_limit")[];
            /** @description Indicates if the order preview is forced upon the user before submission. */
            readonly forceOrderPreview?: boolean;
            /** @description Indicates accepted order types for use with cash quantity. */
            readonly cqtTypes?: readonly ("limit" | "market" | "stop" | "stop_limit" | "mit" | "lit" | "trailing_stop" | "trailing_stop_limit")[];
            /** @description Indicates default order type for the given security type. */
            readonly orderDefaults?: {
                readonly LMT?: {
                    /** @description Indicates a Limit Price default value. */
                    readonly LP?: string;
                };
            };
            /** @description Indicates permitted order types for use outside of regular trading hours. */
            readonly orderTypesOutside?: readonly ("limit" | "stop_limit" | "lit" | "trailing_stop_limit" | "relative")[];
            /**
             * Format: int32
             * @description Default total quantity value for orders.
             */
            readonly defaultSize?: number;
            /**
             * Format: int32
             * @description Default cash value quantity.
             */
            readonly cashSize?: number;
            /**
             * Format: int32
             * @description Indicates quantity increase for the contract.
             */
            readonly sizeIncrement?: number;
            /** @description Indicates allowed tif types supported for the contract. */
            readonly tifTypes?: readonly string[];
            /** @description Object containing details about your TIF value defaults. These defaults can be viewed and modified in TWS's within the Global Configuration. */
            readonly tifDefaults?: {
                /** @description The default TIF type for orders. */
                readonly TIF?: string;
                /** @description The default size value for orders. */
                readonly SIZE?: string;
                /** @description default account (multi account only) */
                readonly DEFAULT_ACCT?: string;
                readonly PMALGO?: boolean;
            };
            /**
             * Format: int32
             * @description Default limit price for the given contract.
             */
            readonly limitPrice?: number;
            /**
             * Format: int32
             * @description Default stop price for the given contract.
             */
            readonly stopPrice?: number;
            /** @description Order origin designation for US securities options and Options Clearing Corporation */
            readonly orderOrigination?: string | null;
            /** @description Indicates if the order preview is required (for client portal only) */
            readonly preview?: boolean;
            /**
             * Format: int32
             * @description Standard display increment rule for the instrument.
             */
            readonly displaySize?: number | null;
            /**
             * Format: int32
             * @description Indicates decimal places for fractional order size.
             */
            readonly fraqInt?: number;
            /** @description Indicates base currency for the instrument. */
            readonly cashCcy?: string;
            /**
             * Format: int32
             * @description Indicates cash quantity increment rules.
             */
            readonly cashQtyIncr?: number;
            /**
             * Format: int32
             * @description Signifies the magnifier of a given contract. This is separate from the price multiplier, and will typically return 'null'
             */
            readonly priceMagnifier?: number | null;
            /** @description Indicates if the value of the contract can be negative (true) or if it is always positive (false). */
            readonly negativeCapable?: boolean;
            /**
             * Format: int32
             * @description Indicates the type of increment style.
             */
            readonly incrementType?: number;
            /** @description Indicates increment rule values including lowerEdge and increment value. */
            readonly incrementRules?: readonly {
                /**
                 * Format: int32
                 * @description If the current mark price of the instrument is at or above the lower edge, the given increment value is used for order prices.
                 */
                readonly lowerEdge?: number;
                /**
                 * Format: int32
                 * @description The price of the instrument must be submitted as a mulitple of the increment value.
                 */
                readonly increment?: number;
            }[];
            readonly hasSecondary?: boolean;
            /** @description Lists the available order types supported when modifying the order. */
            readonly modTypes?: readonly unknown[];
            /**
             * Format: int32
             * @description Minimum increment values for prices
             */
            readonly increment?: number;
            /**
             * Format: int32
             * @description Number of decimal places to indicate the increment value.
             */
            readonly incrementDigits?: number;
        };
        readonly currencyPairs: {
            readonly [key: string]: readonly {
                /** @description The official symbol of the given currency pair. */
                readonly symbol?: string;
                /**
                 * Format: int32
                 * @description The official contract identifier of the given currency pair.
                 */
                readonly conid?: number;
                /**
                 * Format: int32
                 * @description Returns the symbol counterpart.
                 */
                readonly ccyPair?: number;
            }[];
        };
        readonly deliveryOptions: {
            /** @description Returns an array of device information. */
            readonly E?: readonly unknown[];
            /**
             * Format: int32
             * @description Email option is enabled or not.
             */
            readonly M?: number;
        };
        readonly detailedContractInformation: {
            /** @description Confirms if the currency type. If trading exclusively in your base currency, "base" will be returned. */
            readonly currencyType?: string;
            /**
             * Format: int32
             * @description Returns the data identifier (Internal Use Only).
             */
            readonly rc?: number;
            /** @description Returns the accountIds being viewed and returned. */
            readonly view?: readonly string[];
            /**
             * Format: int32
             * @description Returns the total data points.
             */
            readonly nd?: number;
            /** @description Returns the request identifier, getPerformanceAllPeriods. */
            readonly id?: string;
            /** @description Returns an array containing accounts reviewed. */
            readonly included?: readonly string[];
            /** @description Portfolio Measure. Used to indicate TWR or MWR values returned. */
            readonly pm?: string;
        } & {
            readonly [key: string]: {
                /** @description Returns the datetime in EST of the last successful call to the /pa endpoint. */
                readonly lastSuccessfulUpdate?: string;
                /** @description Returns the start date of the request range. */
                readonly start?: string;
                /** @description Returns the valid period values returned by the /pa/allperiods endpoint. */
                readonly periods?: readonly string[];
                /** @description Returns the end date of the request range. */
                readonly end?: string;
                /** @description Clarifies the base currency of the primary accountId. */
                readonly baseCurrency?: string;
            } & {
                readonly [key: string]: {
                    /** @description Returns the object containing the Cumulative performance data. Correlates to the same index position of data reutnred by the "nav" field. */
                    readonly cps?: readonly number[];
                    /** @description Returns the dates corresponding to the frequency of data. */
                    readonly dates?: readonly string[];
                    /** @description Returns the determining frequency of the data range. */
                    readonly freq?: string;
                    /** @description Net asset value data for the account or consolidated accounts. NAV data is not applicable to benchmarks. */
                    readonly nav?: readonly number[];
                    /** @description Returns the starting data for the current NAV details. */
                    readonly startNav?: {
                        /** @description Returns the starting date for the current period's NAV range. */
                        readonly date?: string;
                        /**
                         * Format: int32
                         * @description Returns the inital NAV value of {Period Range} from the current date.
                         */
                        readonly val?: number;
                    };
                };
            };
        };
        readonly disclaimerInfo: {
            /** @description Returns the Typecode for the given disclaimer. */
            readonly FC?: string;
            /** @description Returns the Disclaimer message. */
            readonly DT?: string;
        };
        readonly dynAccountSearchResponse: {
            /** @description Contains a series of objects that pertain to the account information requested. */
            readonly matchedAccounts?: readonly {
                /** @description Returns a matching account ID that corresponds to the matching value. */
                readonly accountId?: string;
                /** @description Returns the corresponding alias or alternative name for the specific account ID. May be a duplicate of the accountId value in most cases. */
                readonly alias?: string;
                /** @description Returns the allocation identifier used internally for the account. */
                readonly allocationId?: string;
            }[];
            /** @description Displays the searchPattern used for the request. */
            readonly pattern?: string;
        };
        readonly errorOnlyResponse: {
            /** @description error reason */
            readonly error?: string;
        };
        readonly errorResponse: {
            /** @description error reason */
            readonly error?: string;
            /** @description mimic response status code */
            readonly statusCode?: string;
        };
        readonly failedTickleResponse: {
            /** @description reason why tickle was accepted by not processed */
            readonly error?: string;
        };
        readonly features: {
            /** @description Displayed as the string of your symbol Contains a series of objects for each symbol that matches the requested. */
            readonly symbol?: readonly unknown[];
        };
        readonly forecastDetailsResponse: {
            /**
             * Format: int32
             * @description Contract identifier of "yes" contract
             */
            readonly conid_yes?: number;
            /**
             * Format: int32
             * @description Contract identifier of "no" contract
             */
            readonly conid_no?: number;
            /** @description Contract question (i.e. "Will this happen on this date?") */
            readonly question?: string;
            /** @description "Y" or "N", yes or no contract. */
            readonly side?: string;
            /** @description Strike label to display. */
            readonly strike_label?: string;
            /**
             * Format: int32
             * @description Contract strike.
             */
            readonly strike?: number;
            /** @description Contract exchange. */
            readonly exchange?: string;
            /** @description Contract expiration date in YYYYMMDD format. */
            readonly expiration?: string;
            /** @description Contract symbol. */
            readonly symbol?: string;
            /** @description Logo category to use in logo service to get image. */
            readonly logo_category?: string;
            /** @description measured period */
            readonly measured_period?: string;
            /** @description name of contract's market. */
            readonly market_name?: string;
            /** @description Immediate underlier to contract (i.e. future conid for FOPs) */
            readonly underlying_conid?: string;
        };
        readonly forecastMarketResponse: {
            /** @description Market contract identifier. */
            readonly market_name?: string;
            /** @description Exchange that was passed in request or determined internally. */
            readonly exchange?: string;
            /** @description Market symbol. */
            readonly symbol?: string;
            /** @description Logo category to use in logo service to retrieve image. */
            readonly logo_category?: string;
            /** @description Indicates whether UI should or should not display underlying chart. */
            readonly exclude_historical_data?: boolean;
            /** @description List of contracts matching the requested market. */
            readonly contracts?: readonly unknown[];
        };
        readonly forecastRulesResponse: {
            /** @description Product asset class. */
            readonly asset_class?: string;
            /** @description Long product description. */
            readonly description?: string;
            /** @description Name of the contract's market. */
            readonly market_name?: string;
            /** @description Measured period of the contract. */
            readonly measured_period?: string;
            /** @description Either strike or strike label depending on contract type. */
            readonly threshold?: string;
            /** @description Name of the contract's source agency. */
            readonly source_agency?: string;
            /** @description Link to data from source agency. */
            readonly data_and_resolution_link?: string;
            /**
             * Format: int32
             * @description last trade time in epoch seconds.
             */
            readonly last_trade_time?: number;
            /** @description Product code (symbol). */
            readonly product_code?: string;
            /** @description Link to market rules document. */
            readonly market_rules_link?: string;
            /**
             * Format: int32
             * @description Release time in epoch seconds.
             */
            readonly release_time?: number;
            /**
             * Format: int32
             * @description Payout time in epoch seconds.
             */
            readonly payout_time?: number;
            /** @description Formatted payout amount. */
            readonly payout?: string;
            /** @description Formatted price increment amount. */
            readonly price_increment?: string;
            /** @description Exchange timezone. */
            readonly exchange_timezone?: string;
        };
        readonly forecastSchedulesResponse: {
            /** @description Exchange timezone of event contract. */
            readonly timezone?: string;
            /** @description List containing trading objects for each date. */
            readonly trading_schedules?: readonly unknown[];
        };
        /** @description Contains commodities specific fund values. */
        readonly funds: {
            /** @description Describes currently avialable funds in your account for trading. */
            readonly current_available?: string;
            /** @description Describes total value of the account. */
            readonly current_excess?: string;
            /** @description Displays predicted post-expiration account value. */
            readonly "Prdctd Pst-xpry Excss"?: string;
            /** @description This value reflects your available funds at the next margin change. */
            readonly "Lk Ahd Avlbl Fnds"?: string;
            /** @description Describes available funds for overnight trading. */
            readonly overnight_available?: string;
            /**
             * @description Overnight refers to the window of time after the local market trading day is closed.
             *       * `Securities` - Equivalent to regular trading hours.
             *        * `Commodities` - Commodities Net Liquidation value. Overnight Maintenance margin.
             */
            readonly overnight_excess?: string;
        };
        readonly fyiEnableDeviceOption: {
            readonly deviceName?: string;
            readonly deviceId?: string;
            readonly uiName?: string;
            /** @description enable or disable device */
            readonly enabled?: boolean;
        };
        readonly fyiSettings: readonly {
            /**
             * Format: int32
             * @description Returns ony if the subscription can be disabled/enabled manually. See /fyi/settings/{typecode} for how to enable/disable.
             */
            readonly A?: number;
            /** @description Fyi code for enabling or disabling the notification. */
            readonly FC?: string;
            /**
             * Format: int32
             * @description Disclaimer if the notification was read.
             */
            readonly H?: number;
            /** @description Returns a detailed description of the topic. */
            readonly FD?: string;
            /** @description Returns a human readable title for the notification. */
            readonly FN?: string;
        }[];
        readonly fyiVT: {
            /**
             * Format: int32
             * @description Returns 1 to state message was acknowledged.
             */
            readonly V?: number;
            /**
             * Format: int32
             * @description Returns the time in ms to complete the edit.
             */
            readonly T?: number;
        };
        /** @description A specific account's position in the requested conid. */
        readonly individualPosition: {
            /** @description IB accountId of an account with a position in the requested conid. */
            readonly acctId?: string;
            /** @description Comma separated all exchanges on which the instrument trades. */
            readonly allExchanges?: string;
            /** @description Asset class of the requested instrument. */
            readonly assetClass?: string;
            /** @description The account's average cost for its position. */
            readonly avgCost?: number;
            /** @description The account's average price for its position. */
            readonly avgPrice?: number;
            /** @description Average cost in the account's base currency. */
            readonly baseAvgCost?: number;
            /** @description Average price in the account's base currency. */
            readonly baseAvgPrice?: number;
            /** @description Market price of instrument in the account's base currency. */
            readonly baseMktPrice?: number;
            /** @description Market value of the position in the account's base currency. */
            readonly baseMktValue?: number;
            /** @description Realized PnL for the instrument in the account's base currency. */
            readonly baseRealizedPnl?: number;
            /** @description Unrealized PnL for the instrument in the account's base currency. */
            readonly baseUnrealizedPnl?: number;
            /** @description Chinese name of the instrument. */
            readonly chineseName?: string;
            readonly conExchMap?: readonly unknown[];
            /**
             * Format: int32
             * @description IB contract ID for the instrument.
             */
            readonly conid?: number;
            /** @description Human-readable description of the instrument. */
            readonly contractDesc?: string;
            /** @description Country in which the instrument is issued. */
            readonly countryCode?: string;
            /** @description Currency in which the instrument trades. */
            readonly currency?: string;
            /** @description Object defining minimum increments used in displaying market data for the instrument. */
            readonly displayRule?: {
                /** @description Array containing objects corresponding to display rule increments. */
                readonly displayRuleStep?: readonly {
                    /**
                     * Format: int32
                     * @description Number of decimal digits to display.
                     */
                    readonly decimalDigits?: number;
                    /** @description Lower edge from which the display rule is effective. */
                    readonly lowerEdge?: number;
                    /**
                     * Format: int32
                     * @description Number of integer digits to display.
                     */
                    readonly wholeDigits?: number;
                }[];
                /**
                 * Format: int32
                 * @description Magnifier applied to pricing, if applicable.
                 */
                readonly magnification?: number;
            };
            readonly exchs?: Record<string, never> | null;
            /** @description Style of exercise for options. */
            readonly exerciseStyle?: string | null;
            /** @description Expiration of instrument, if applicable. */
            readonly expiry?: string | null;
            /** @description Full display name of the instrument. */
            readonly fullName?: string;
            /** @description Industry sub-categorization of the instrument. */
            readonly group?: string;
            /** @description Indicates whether instrument has options contracts available for trading at IB. */
            readonly hasOptions?: boolean;
            /** @description Array containing increment rules used when pricing orders for the instrument. */
            readonly incrementRules?: readonly {
                /** @description The pricing increment. */
                readonly increment?: number;
                /** @description Lower edge from which the price increment rule is effective. */
                readonly lowerEdge?: number;
            }[];
            /** @description Indicates whether the instrument is an Event Contract. */
            readonly isEventContract?: boolean;
            /** @description Indicates whether the instrument is issued in the US. */
            readonly isUS?: boolean;
            /** @description Last day of trading in the instrument, if applicable. Formatted `YYYYMMDD`. */
            readonly lastTradingDay?: string;
            /** @description The exchange on which the instrument is listed, or the primary exchange recognized by IB for the instrument. */
            readonly listingExchange?: string;
            /** @description Current market price of the instrument, in the instrument's currency. */
            readonly mktPrice?: number;
            /** @description Current market value of the account's position in the instrument, in the instrument's currency. */
            readonly mktValue?: number;
            /** @description Name of the model portfolio in which the account is invested that contributes this position. */
            readonly model?: string;
            /** @description Instrument's multiplier, if applicable. */
            readonly multiplier?: number;
            /** @description Formal name of the entity or asset to which the instrument relates. */
            readonly name?: string;
            /**
             * Format: int32
             * @description Maximum number of accounts that can be returned in a single request.
             */
            readonly pageSize?: number;
            /** @description Size of position in units of instrument. */
            readonly position?: number;
            /**
             * @description The right of an options contract, if applicable.
             * @enum {string}
             */
            readonly putOrCall?: "P" | "C";
            /** @description Realized PnL for the instrument in the instrument's currency. */
            readonly realizedPnl?: number;
            /** @description Industry sector categorization of the instrument. */
            readonly sector?: string;
            /** @description Industry sub-categorization of the instrument. */
            readonly sectorGroup?: string;
            /** @description Strike price, if applicable. Returned as string. */
            readonly strike?: string;
            /** @description Symbol associated with the instrument. */
            readonly ticker?: string;
            /**
             * Format: int32
             * @description Time taken to retrieve position data in milliseconds.
             */
            readonly time?: number;
            /** @description Description of instrument, used to differentiate classes, if applicable. */
            readonly type?: string;
            /**
             * Format: int32
             * @description Contract ID of underlying instrument, if applicable.
             */
            readonly undConid?: number;
            /** @description Unrealized PnL for the instrument in the account. */
            readonly unrealizedPnl?: number;
        };
        readonly individualPositionArray: readonly components["schemas"]["individualPosition"][];
        /** @description Object containing the requested historical data and related metadata. */
        readonly iserverHistoryBidAskResponse: {
            /** @description Internal use. Identifier of the request. */
            readonly serverId?: string;
            /** @description Symbol of the request instrument. */
            readonly symbol?: string;
            /** @description Description or company name of the instrument. */
            readonly text?: string;
            /**
             * Format: int32
             * @description Internal use. Used to scale Client Portal chart Y-axis.
             */
            readonly priceFactor?: number;
            /** @description UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss. */
            readonly startTime?: string;
            /** @description Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly high?: string;
            /** @description Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly low?: string;
            /** @description The client-specified period value. */
            readonly timePeriod?: string;
            /**
             * Format: int32
             * @description The client-specified bar width, represented in seconds.
             */
            readonly barLength?: number;
            /** @description A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book. */
            readonly mdAvailability?: string;
            /** @description Indicates whether data from outside regular trading hours is included in the response. */
            readonly outsideRth?: boolean;
            /**
             * Format: int32
             * @description Length of instrument's trading day in seconds.
             */
            readonly tradingDayDuration?: number;
            /**
             * Format: int32
             * @description Internal use. Used to scale volume histograms.
             */
            readonly volumeFactor?: number;
            /**
             * Format: int32
             * @description Internal use. Governs application of pricing display rule.
             */
            readonly priceDisplayRule?: number;
            /** @description Internal use. Governs rendering of displayed pricing. */
            readonly priceDisplayValue?: string;
            /** @description Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss. */
            readonly chartPanStartTime?: string;
            /**
             * Format: int32
             * @description Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
             * @enum {integer}
             */
            readonly direction?: -1;
            /** @description Indicates whether instrument is capable of negative pricing. */
            readonly negativeCapable?: boolean;
            /**
             * Format: int32
             * @description Internal use. Reflects the version of the response schema used.
             */
            readonly messageVersion?: number;
            /**
             * Format: int32
             * @description Internal time in flight to serve the request.
             */
            readonly travelTime?: number;
            /** @description Array containing OHLC bars for the requested period. */
            readonly data?: readonly components["schemas"]["singleHistoricalBarBidAsk"][];
            /**
             * Format: int32
             * @description Count of the number of bars returned in the data array.
             */
            readonly points?: number;
            /**
             * Format: int32
             * @description Number of milliseconds taken to satisfy this historical data request.
             */
            readonly mktDataDelay?: number;
        };
        /** @description Object containing the requested historical data and related metadata. */
        readonly iserverHistoryLastResponse: {
            /** @description Internal use. Identifier of the request. */
            readonly serverId?: string;
            /** @description Symbol of the request instrument. */
            readonly symbol?: string;
            /** @description Description or company name of the instrument. */
            readonly text?: string;
            /**
             * Format: int32
             * @description Internal use. Used to scale Client Portal chart Y-axis.
             */
            readonly priceFactor?: number;
            /** @description UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss. */
            readonly startTime?: string;
            /** @description Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly high?: string;
            /** @description Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly low?: string;
            /** @description The client-specified period value. */
            readonly timePeriod?: string;
            /**
             * Format: int32
             * @description The client-specified bar width, represented in seconds.
             */
            readonly barLength?: number;
            /** @description A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book. */
            readonly mdAvailability?: string;
            /** @description Indicates whether data from outside regular trading hours is included in the response. */
            readonly outsideRth?: boolean;
            /**
             * Format: int32
             * @description Length of instrument's trading day in seconds.
             */
            readonly tradingDayDuration?: number;
            /**
             * Format: int32
             * @description Internal use. Used to scale volume histograms.
             */
            readonly volumeFactor?: number;
            /**
             * Format: int32
             * @description Internal use. Governs application of pricing display rule.
             */
            readonly priceDisplayRule?: number;
            /** @description Internal use. Governs rendering of displayed pricing. */
            readonly priceDisplayValue?: string;
            /** @description Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss. */
            readonly chartPanStartTime?: string;
            /**
             * Format: int32
             * @description Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
             * @enum {integer}
             */
            readonly direction?: -1;
            /** @description Indicates whether instrument is capable of negative pricing. */
            readonly negativeCapable?: boolean;
            /**
             * Format: int32
             * @description Internal use. Reflects the version of the response schema used.
             */
            readonly messageVersion?: number;
            /**
             * Format: int32
             * @description Internal time in flight to serve the request.
             */
            readonly travelTime?: number;
            /** @description Array containing OHLC bars for the requested period. */
            readonly data?: readonly components["schemas"]["singleHistoricalBarLast"][];
            /**
             * Format: int32
             * @description Count of the number of bars returned in the data array.
             */
            readonly points?: number;
            /**
             * Format: int32
             * @description Number of milliseconds taken to satisfy this historical data request.
             */
            readonly mktDataDelay?: number;
        };
        /** @description Object containing the requested historical data and related metadata. */
        readonly iserverHistoryMidpointResponse: {
            /** @description Internal use. Identifier of the request. */
            readonly serverId?: string;
            /** @description Symbol of the request instrument. */
            readonly symbol?: string;
            /** @description Description or company name of the instrument. */
            readonly text?: string;
            /**
             * Format: int32
             * @description Internal use. Used to scale Client Portal chart Y-axis.
             */
            readonly priceFactor?: number;
            /** @description UTC date and time of the start (chronologically earlier) of the complete period in format YYYYMMDD-hh:mm:ss. */
            readonly startTime?: string;
            /** @description Internal use. Delivers highest price value in total interval. Used for chart scaling. A string constructed as 'highestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly high?: string;
            /** @description Internal use. Delivers lowest price value in total interval. Used for chart scaling. A string constructed as 'lowestPrice*priceFactor/totalVolume*volumeFactor/minutesFromStartTime'. */
            readonly low?: string;
            /** @description The client-specified period value. */
            readonly timePeriod?: string;
            /**
             * Format: int32
             * @description The client-specified bar width, represented in seconds.
             */
            readonly barLength?: number;
            /** @description A three-character string reflecting the nature of available data. R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed. P = Snapshot, p = Consolidated. B = Top of book. */
            readonly mdAvailability?: string;
            /** @description Indicates whether data from outside regular trading hours is included in the response. */
            readonly outsideRth?: boolean;
            /**
             * Format: int32
             * @description Length of instrument's trading day in seconds.
             */
            readonly tradingDayDuration?: number;
            /**
             * Format: int32
             * @description Internal use. Used to scale volume histograms.
             */
            readonly volumeFactor?: number;
            /**
             * Format: int32
             * @description Internal use. Governs application of pricing display rule.
             */
            readonly priceDisplayRule?: number;
            /** @description Internal use. Governs rendering of displayed pricing. */
            readonly priceDisplayValue?: string;
            /** @description Internal use. UTC datetime string used to center Client Portal charts. Format YYYYMMDD-hh:mm:ss. */
            readonly chartPanStartTime?: string;
            /**
             * Format: int32
             * @description Indicates how the period is applied in relation to the startTime. Value will always be -1, indicating that the period extends from the startTime forward into the future.
             * @enum {integer}
             */
            readonly direction?: -1;
            /** @description Indicates whether instrument is capable of negative pricing. */
            readonly negativeCapable?: boolean;
            /**
             * Format: int32
             * @description Internal use. Reflects the version of the response schema used.
             */
            readonly messageVersion?: number;
            /**
             * Format: int32
             * @description Internal time in flight to serve the request.
             */
            readonly travelTime?: number;
            /** @description Array containing OHLC bars for the requested period. */
            readonly data?: readonly components["schemas"]["singleHistoricalBarMidpoint"][];
            /**
             * Format: int32
             * @description Count of the number of bars returned in the data array.
             */
            readonly points?: number;
            /**
             * Format: int32
             * @description Number of milliseconds taken to satisfy this historical data request.
             */
            readonly mktDataDelay?: number;
        };
        readonly iserverScannerParams: {
            /** @description Contains all values used as the scanner “type” in the request. */
            readonly scan_type_list?: readonly {
                /** @description Human readable name for the scanner “type” */
                readonly display_name?: string;
                /** @description Value used for the market scanner request. */
                readonly code?: string;
                /** @description Returns all instruments the scanner type can be used with. */
                readonly instruments?: readonly unknown[];
            }[];
            /** @description Contains all values relevant to the scanner “instrument” request field. */
            readonly instrument_list?: readonly {
                /** @description Human readable representation of the instrument type. */
                readonly display_name?: string;
                /** @description Value used for the market scanner request. */
                readonly type?: string;
                /** @description Returns an array of all filters uniquely avaliable to that instrument type. */
                readonly filters?: readonly unknown[];
            }[];
            readonly filter_list?: readonly {
                /** @description Returns the group of filters the request is affiliated with. */
                readonly group?: string;
                /** @description Returns the human-readable identifier for the filter. */
                readonly display_name?: string;
                /** @description Value used for the market scanner request. */
                readonly code?: string;
                /** @description Returns the type of value to be used in the request. This can indicate a range based value, or if it should be a single value. */
                readonly type?: string;
                /** @description combo values when type equals to combo */
                readonly combo_values?: readonly {
                    readonly default?: boolean;
                    readonly vendor?: Record<string, never>;
                }[];
            }[];
            /** @description Contains all values relevant to the location field of the market scanner request. */
            readonly location_tree?: readonly {
                /** @description Returns the overarching instrument type to designate the location. */
                readonly display_name?: string;
                /** @description Returns the code value of the market scanner instrument type value. */
                readonly type?: string;
                readonly locations?: readonly {
                    /** @description Returns the human-readable value of the market scanner’s location value. */
                    readonly display_name?: string;
                    /** @description Returns the code value of the market scanner location value. */
                    readonly type?: string;
                    readonly locations?: readonly {
                        readonly display_name?: string;
                        readonly type?: string;
                    }[];
                }[];
            }[];
        };
        readonly iserverScannerRunRequest: {
            /** @description Instrument type as the target of the market scanner request. Found in the “instrument_list” section of the /iserver/scanner/params response. */
            readonly instrument?: string;
            /** @description Scanner value the market scanner is sorted by. Based on the “scan_type_list” section of the /iserver/scanner/params response. */
            readonly type?: string;
            /** @description Location value the market scanner is searching through. Based on the “location_tree” section of the /iserver/scanner/params response. */
            readonly location?: string;
            /** @description Contains any additional filters that should apply to response. */
            readonly filter?: readonly {
                /** @description Code value of the filter. Based on the “code” value within the “filter_list” section of the /iserver/scanner/params response. */
                readonly code?: string;
                /** @description Value corresponding to the input for “code”. */
                readonly value?: string | number | boolean;
            }[];
        };
        readonly iserverScannerRunResponse: {
            /** @description Contains contracts related to the market scanner request. */
            readonly contracts?: readonly {
                /** @description Contract’s index in relation to the market scanner type’s sorting priority. */
                readonly server_id?: string;
                /** @description Always returned for the first contract. */
                readonly column_name?: string;
                /** @description Returns the contract’s ticker symbol. */
                readonly symbol?: string;
                /** @description Returns the contract ID of the contract. */
                readonly conidex?: string;
                /**
                 * Format: int32
                 * @description Returns the contract ID of the contract.
                 */
                readonly con_id?: number;
                /** @description Internal Use Only */
                readonly available_chart_periods?: string;
                /** @description Returns the company long name. */
                readonly company_name?: string;
                /** @description For derivatives like Futures, the local symbol of the contract will be returned. */
                readonly contract_description_1?: string;
                /** @description Returns the primary listing exchange of the contract. */
                readonly listing_exchange?: string;
                /** @description Returns the security type of the contract. */
                readonly sec_type?: string;
            }[];
            /** @description Internal Use Only */
            readonly scan_data_column_name?: string;
        };
        /** @description Returns an object for each conId requested. */
        readonly iserverSnapshot: readonly unknown[];
        /** @description Contains objects reflecting all currencies in which the account's positions trade. */
        readonly ledger: {
            readonly [key: string]: {
                /** @description The Account ID of the requested account. */
                readonly acctcode?: string;
                /** @description The given account's cash balance in this currency. */
                readonly cashbalance?: number;
                /** @description The given account's cash balance in its dedicated forex segment in this currency, if applicable. */
                readonly cashbalancefxsegment?: number;
                /** @description Market value of the given account's commodity positions in this currency. */
                readonly commoditymarketvalue?: number;
                /** @description Market value of the given account's corporate bond positions in this currency. */
                readonly corporatebondsmarketvalue?: number;
                /** @description Three-letter name of the currency reflected by this object, or 'BASE' for the account's base currency. */
                readonly currency?: string;
                /** @description The given account's receivable (not yet disbursed) dividend balance in this currency. */
                readonly dividends?: number;
                /**
                 * Format: int32
                 * @description Exchange rate of this currency relative to the account's base currency.
                 */
                readonly exchangerate?: number;
                /** @description The value of the given account's mutual fund holdings in this currency. */
                readonly funds?: number;
                /** @description Market value of the given account's futures positions in this currency. */
                readonly futuremarketvalue?: number;
                /** @description Market value of the given account's futures options positions in this currency. */
                readonly futureoptionmarketvalue?: number;
                /** @description PnL of the given account's futures positions in this currency. */
                readonly futuresonlypnl?: number;
                /** @description The given account's receivable interest balance in this currency. */
                readonly interest?: number;
                /** @description Market value of the given account's issuer options positions in this currency. */
                readonly issueroptionsmarketvalue?: number;
                /**
                 * @description Identifies the nature of data. Always takes values 'LedgerList'.
                 * @enum {string}
                 */
                readonly key?: "LedgerList";
                /** @description The value of the given account's money market fund holdings in this currency. */
                readonly moneyfunds?: number;
                /** @description The given account's net liquidation value of positions in this currency. */
                readonly netliquidationvalue?: number;
                /** @description The given account's realized PnL for positions in this currency. */
                readonly realizedpnl?: number;
                /** @description Additional identifier of the currency reflected in this object. Always matches 'currency' field. */
                readonly secondkey?: string;
                /** Format: int32 */
                readonly sessionid?: number;
                /** @description The given account's settled cash balance in this currency. */
                readonly settledcash?: number;
                /** Format: int32 */
                readonly severity?: number;
                /** @description Market value of the given account's stock positions in this currency. */
                readonly stockmarketvalue?: number;
                /** @description Market value of the given account's stock options positions in this currency. */
                readonly stockoptionmarketvalue?: number;
                /** @description Market value of the given account's treasury bill positions in this currency. */
                readonly tbillsmarketvalue?: number;
                /** @description Market value of the given account's treasury bond positions in this currency. */
                readonly tbondsmarketvalue?: number;
                /**
                 * Format: int32
                 * @description Timestamp of retrievable of this account ledger data.
                 */
                readonly timestamp?: number;
                /** @description The given account's unrealied PnL for positions in this currency. */
                readonly unrealizedpnl?: number;
                /** @description Market value of the given account's warrant positions in this currency. */
                readonly warrantsmarketvalue?: number;
            };
        };
        readonly liveOrdersResponse: {
            /** @description Array of orders that are currently working, or were filled/cancelled in the current brokerage session. */
            readonly orders?: readonly {
                /** @description IB account ID to which the order was placed. */
                readonly account?: string;
                /** @description IB account ID to which the order was placed. */
                readonly acct?: string;
                /** @description Average price of fills against the order, if any. */
                readonly avgPrice?: string;
                /** @description Internal use. IB's UI background color in hex. */
                readonly bgColor?: string;
                /** @description Currency of the order ticket's Cash Quantity, if applicable. */
                readonly cashCcy?: string;
                /** @description Name of business associated with instrument, or otherwise description of instrument. */
                readonly companyName?: string;
                /** @description Contract ID of the order's instrument. */
                readonly conid?: string;
                /** @description Contract ID and routing destination in format 123456@EXCHANGE. */
                readonly conidex?: string;
                /** @description Descriptive text, or additional details that specific the instrument. */
                readonly description1?: string;
                /** @description Only present for derivatives. Shows Expiry, Strike, Right, And Exchange information. */
                readonly description2?: string;
                /** @description Routing destination of the order ticket. */
                readonly exchange?: string;
                /** @description Internal use. IB's UI foreground color in hex. */
                readonly fgColor?: string;
                /** @description Quantity filled in units of the instrument. */
                readonly filledQuantity?: string;
                /**
                 * @description Indicates whether the order ticket is an Event Trading order.
                 * @enum {string}
                 */
                readonly isEventTrading?: "0" | "1";
                /** @description Time of last execution against the order in format YYMMDDhhmmss. */
                readonly lastExecutionTime?: string;
                /** @description Unix timestamp of the last execution against the order. */
                readonly lastExecutionTime_r?: string;
                /** @description Exchange on which the instrument is listed. */
                readonly listingExchange?: string;
                /** @description Human-readable shorthand rendering of the order ticket. */
                readonly orderDesc?: string;
                /**
                 * Format: int32
                 * @description IB-assigned order identifier.
                 */
                readonly orderId?: number;
                /** @description Order type of a working order ticket. */
                readonly orderType?: string;
                /** @description Only present for Cancelled orders. Provides the reason for order to have been cancelled or rejected by the system. */
                readonly order_cancellation_by_system_reason?: string;
                /** @description IB internal order status. */
                readonly order_ccp_status?: string;
                /** @description Order type of a filled order. */
                readonly origOrderType?: string;
                /** @description Price of the order, if applicable to the order type. */
                readonly price?: string;
                /** @description Quantity remaining to be filled in units of the instrument. */
                readonly remainingQuantity?: string;
                /** @description Asset class of the instrument. */
                readonly secType?: string;
                /** @description Side of the order. */
                readonly side?: string;
                /** @description Human-readable shorthand rendering of the filled and total quantities of the order. */
                readonly sizeAndFills?: string;
                /**
                 * @description Status of the order ticket.
                 * @enum {string}
                 */
                readonly status?: "Inactive" | "PendingSubmit" | "PreSubmitted" | "Submitted" | "Filled" | "PendingCancel" | "Cancelled" | "WarnState";
                /**
                 * @description Indicates whether the order is supported by IB's Tax Optimization tool.
                 * @enum {string}
                 */
                readonly supportsTaxOpt?: "0" | "1";
                /** @description Tax Optimizer id, identifies set of tax lots selected, for gains and losses management. */
                readonly taxOptimizerId?: string;
                /** @description Symbol or base product code of the instrument. */
                readonly ticker?: string;
                /** @description Time of force of the order. */
                readonly timeInForce?: string;
                /** @description Total size of a cash quantity order. */
                readonly totalCashSize?: string;
                /** @description Total size of an order in the instrument's units. */
                readonly totalSize?: string;
            }[];
            /** @description Whether the response is a snapshot. */
            readonly snapshot?: boolean;
        };
        /**
         * @description Many FYI endpoints reference a "typecode" value. The table below lists the available codes and what they correspond to.
         *       * `31` - Last Price. The last price at which the contract traded. May contain one of the following prefixes: C - Previous day's closing price. H - Trading has halted.
         *       * `55` - Symbol.
         *       * `58` - Text.
         *       * `70` - High. Current day high price
         *       * `71` - Low. Current day low price
         *       * `73` - Market Value. The current market value of your position in the security. Market Value is calculated with real time market data (even when not subscribed to market data).
         *       * `74` - Avg Price. The average price of the position.
         *       * `75` - Unrealized PnL. Unrealized profit or loss. Unrealized PnL is calculated with real time market data (even when not subscribed to market data).
         *       * `76` - Formatted position.
         *       * `77` - Formatted Unrealized PnL.
         *       * `78` - Daily PnL. Your profit or loss of the day since prior close. Daily PnL is calculated with real time market data (even when not subscribed to market data).
         *       * `79` - Realized PnL. Realized profit or loss. Realized PnL is calculated with real time market data (even when not subscribed to market data).
         *       * `80` - Unrealized PnL %. Unrealized profit or loss expressed in percentage.
         *       * `82` - Change. The difference between the last price and the close on the previous trading day
         *       * `83` - Change %. The difference between the last price and the close on the previous trading day in percentage.
         *       * `84` - Bid Price. The highest-priced bid on the contract.
         *       * `85` - Ask Size. The number of contracts or shares offered at the ask price. For US stocks
         *       * `86` - Ask Price. The lowest-priced offer on the contract.
         *       * `87` - Volume. Volume for the day
         *       * `88` - Bid Size. The number of contracts or shares bid for at the bid price. For US stocks
         *       * `6004` - Exchange.
         *       * `6008` - Conid. Contract identifier from IBKR's database.
         *       * `6070` - SecType. The asset class of the instrument.
         *       * `6072` - Months.
         *       * `6073` - Regular Expiry.
         *       * `6119` - Marker for market data delivery method (similar to request id).
         *       * `6457` - Underlying Conid. Use /trsrv/secdef to get more information about the security.
         *       * `6508` - Service Params..
         *       * `6509` - Market Data Availability. The field may contain three chars. First char defines: R = RealTime, D = Delayed, Z = Frozen, Y = Frozen Delayed, N = Not Subscribed, i - incomplete, v - VDR Exempt (Vendor Display Rule 603c). Second char defines: P = Snapshot, p = Consolidated. Third char defines: B = Book. RealTime Data is relayed back in real time without delay, market data subscription(s) are required. Delayed - Data is relayed back 15-20 min delayed. Frozen - Last recorded data at market close.  relayed back in real time. Frozen Delayed - Last recorded data at market close, relayed back delayed. Not Subscribed - User does not have the required market data subscription(s) to relay back either real time or delayed data. Snapshot - Snapshot request is available for contract. Consolidated - Market data is aggregated across multiple exchanges or venues. Book - Top of the book data is available for contract.
         *       * `7051` - Company name.
         *       * `7057` - Ask Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
         *       * `7058` - Last Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
         *       * `7059` - Last Size. The number of unites traded at the last price
         *       * `7068` - Bid Exch. Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
         *       * `7084` - Implied Vol./Hist. Vol %. The ratio of the implied volatility over the historical volatility, expressed as a percentage.
         *       * `7085` - Put/Call Interest. Put option open interest/call option open interest for the trading day.
         *       * `7086` - Put/Call Volume. Put option volume/call option volume for the trading day.
         *       * `7087` - Hist. Vol. %. 30-day real-time historical volatility.
         *       * `7088` - Hist. Vol. Close %. Shows the historical volatility based on previous close price.
         *       * `7089` - Opt. Volume. Option Volume
         *       * `7094` - Conid + Exchange.
         *       * `7184` - canBeTraded. If contract is a trade-able instrument. Returns 1(true) or 0(false).
         *       * `7219` - Contract Description.
         *       * `7220` - Contract Description.
         *       * `7221` - Listing Exchange.
         *       * `7280` - Industry. Displays the type of industry under which the underlying company can be categorized.
         *       * `7281` - Category. Displays a more detailed level of description within the industry under which the underlying company can be categorized.
         *       * `7282` - Average Volume. The average daily trading volume over 90 days.
         *       * `7283` - Option Implied Vol. %. A prediction of how volatile an underlying will be in the future.At the market volatility estimated for a maturity thirty calendar days forward of the current trading day, and based on option prices from two consecutive expiration months. To query the Implied Vol. % of a specific strike refer to field 7633.
         *       * `7284` - Historical volatility %. Deprecated
         *       * `7285` - Put/Call Ratio.
         *       * `7292` - Cost Basis. Your current position in this security multiplied by the average price and multiplier.
         *       * `7293` - 52 Week High. The highest price for the past 52 weeks.
         *       * `7294` - 52 Week Low. The lowest price for the past 52 weeks.
         *       * `7295` - Open. Today's opening price.
         *       * `7296` - Close. Today's closing price.
         *       * `7308` - Delta. The ratio of the change in the price of the option to the corresponding change in the price of the underlying.
         *       * `7309` - Gamma. The rate of change for the delta with respect to the underlying asset's price.
         *       * `7310` - Theta. A measure of the rate of decline the value of an option due to the passage of time.
         *       * `7311` - Vega. The amount that the price of an option changes compared to a 1% change in the volatility.
         *       * `7607` - Opt. Volume Change %. Today's option volume as a percentage of the average option volume.
         *       * `7633` - Implied Vol. %. The implied volatility for the specific strike of the option in percentage. To query the Option Implied Vol. % from the underlying refer to field 7283.
         *       * `7635` - Mark. The mark price is
         *       * `7636` - Shortable Shares. Number of shares available for shorting.
         *       * `7637` - Fee Rate. Interest rate charged on borrowed shares.
         *       * `7638` - Option Open Interest.
         *       * `7639` - % of Mark Value. Displays the market value of the contract as a percentage of the total market value of the account. Mark Value is calculated with real time market data (even when not subscribed to market data).
         *       * `7644` - Shortable. Describes the level of difficulty with which the security can be sold short.
         *       * `7655` - Morningstar Rating. Displays Morningstar Rating provided value. Requires Morningstar subscription.
         *       * `7671` - Dividends. This value is the total of the expected dividend payments over the next twelve months per share.
         *       * `7672` - Dividends TTM. This value is the total of the expected dividend payments over the last twelve months per share.
         *       * `7674` - EMA(200). Exponential moving average (N=200).
         *       * `7675` - EMA(100). Exponential moving average (N=100).
         *       * `7676` - EMA(50). Exponential moving average (N=50).
         *       * `7677` - EMA(20). Exponential moving average (N=20).
         *       * `7678` - Price/EMA(200). Price to Exponential moving average (N=200) ratio -1
         *       * `7679` - Price/EMA(100). Price to Exponential moving average (N=100) ratio -1
         *       * `7724` - Price/EMA(50). Price to Exponential moving average (N=50) ratio -1
         *       * `7681` - Price/EMA(20). Price to Exponential moving average (N=20) ratio -1
         *       * `7682` - Change Since Open. The difference between the last price and the open price.
         *       * `7683` - Upcoming Event. Shows the next major company event. Requires Wall Street Horizon subscription.
         *       * `7684` - Upcoming Event Date. The date of the next major company event. Requires Wall Street Horizon subscription.
         *       * `7685` - Upcoming Analyst Meeting. The date and time of the next scheduled analyst meeting. Requires Wall Street Horizon subscription.
         *       * `7686` - Upcoming Earnings. The date and time of the next scheduled earnings/earnings call event. Requires Wall Street Horizon subscription.
         *       * `7687` - Upcoming Misc Event. The date and time of the next shareholder meeting
         *       * `7688` - Recent Analyst Meeting. The date and time of the most recent analyst meeting. Requires Wall Street Horizon subscription.
         *       * `7689` - Recent Earnings. The date and time of the most recent earnings/earning call event. Requires Wall Street Horizon subscription.
         *       * `7690` - Recent Misc Event. The date and time of the most recent shareholder meeting
         *       * `7694` - Probability of Max Return. Customer implied probability of maximum potential gain.
         *       * `7695` - Break Even. Break even points
         *       * `7696` - SPX Delta. Beta Weighted Delta is calculated using the formula; Delta x dollar adjusted beta
         *       * `7697` - Futures Open Interest. Total number of outstanding futures contracts
         *       * `7698` - Last Yield. Implied yield of the bond if it is purchased at the current last price. Last yield is calculated using the Last price on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
         *       * `7699` - Bid Yield. Implied yield of the bond if it is purchased at the current bid price. Bid yield is calculated using the Ask on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
         *       * `7700` - Probability of Max Return. Customer implied probability of maximum potential gain.
         *       * `7702` - Probability of Max Loss. Customer implied probability of maximum potential loss.
         *       * `7703` - Profit Probability. Customer implied probability of any gain.
         *       * `7704` - Organization Type.
         *       * `7705` - Debt Class.
         *       * `7706` - Ratings. Ratings issued for bond contract.
         *       * `7707` - Bond State Code.
         *       * `7708` - Bond Type.
         *       * `7714` - Last Trading Date.
         *       * `7715` - Issue Date.
         *       * `7720` - Ask Yield. Implied yield of the bond if it is purchased at the current offer. Ask yield is calculated using the Bid on all possible call dates. It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates. The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
         *       * `7741` - Prior Close. Yesterday's closing price
         *       * `7762` - Volume Long. High precision volume for the day. For formatted volume refer to field 87.
         *       * `7768` - hasTradingPermissions. if user has trading permissions for specified contract. Returns 1(true) or 0(false).
         *       * `7920` - Daily PnL Raw. Your profit or loss of the day since prior close. Daily PnL is calculated with real-time market data (even when not subscribed to market data).
         *       * `7921` - Cost Basis Raw. Your current position in this security multiplied by the average price and and multiplier.
         *       * `7943` - Rebate Rate. Fed funds or other currency-relevant Benchmark rate minus the interest rate charged on borrowed shares.
         * @enum {unknown}
         */
        readonly mdFields: "31" | "55" | "58" | "70" | "71" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "6004" | "6008" | "6070" | "6072" | "6073" | "6119" | "6457" | "6508" | "6509" | "7051" | "7057" | "7058" | "7059" | "7068" | "7084" | "7085" | "7086" | "7087" | "7088" | "7089" | "7094" | "7184" | "7219" | "7220" | "7221" | "7280" | "7281" | "7282" | "7283" | "7284" | "7285" | "7292" | "7293" | "7294" | "7295" | "7296" | "7308" | "7309" | "7310" | "7311" | "7607" | "7633" | "7635" | "7636" | "7637" | "7638" | "7639" | "7644" | "7655" | "7671" | "7672" | "7674" | "7675" | "7676" | "7677" | "7678" | "7679" | "7724" | "7681" | "7682" | "7683" | "7684" | "7685" | "7686" | "7687" | "7688" | "7689" | "7690" | "7694" | "7695" | "7696" | "7697" | "7698" | "7699" | "7700" | "7702" | "7703" | "7704" | "7705" | "7706" | "7707" | "7708" | "7714" | "7715" | "7720" | "7741" | "7762" | "7768" | "7920" | "7921" | "7943";
        readonly notificationReadAcknowledge: {
            /**
             * Format: int32
             * @description Returns 1 to state message was acknowledged.
             */
            readonly V?: number;
            /**
             * Format: int32
             * @description Returns the time in ms to complete the edit.
             */
            readonly T?: number;
            /** @description Returns details about the notification read status. */
            readonly P?: {
                /**
                 * Format: int32
                 * @description Returns if the message was read (1) or unread (0).
                 */
                readonly R?: number;
                /** @description Returns the ID for the notification. */
                readonly ID?: string;
            };
        };
        readonly notifications: readonly {
            /** @description Return if the notification was read or not. Value Format: 0: Disabled; 1: Enabled. */
            readonly R?: string;
            /** @description Notification date as an epoch string. */
            readonly D?: string;
            /** @description Title of notification. */
            readonly MS?: string;
            /** @description Content of notification. */
            readonly MD?: string;
            /** @description Unique way to reference the notification. */
            readonly ID?: string;
            /**
             * Format: int32
             * @description HT
             * @example 0
             */
            readonly HT?: number;
            /** @description FYI code, we can use it to find whether the disclaimer is accepted or not in settings */
            readonly FC?: string;
        }[];
        /** @description Acknowledges IB's acceptance of the request to cancel the order. Does not report whether the cancellation can or will ultimately be enacted. */
        readonly orderCancelSuccess: {
            /**
             * @description Indicates success with value 'Request was submitted'
             * @enum {string}
             */
            readonly msg?: "Request was submitted";
            /** @description IB order ID of the order ticket requested for cancellation. */
            readonly order_id?: string;
            /** @description IB contract ID of the order ticket's instrument. */
            readonly conid?: string;
            /** @description IB account to which the order was originally set to clear. */
            readonly account?: string;
        };
        /** @description Projected costs and changes to margin and equity values in the account, if the order ticket were executed in full. */
        readonly orderPreview: {
            /** @description Describes the projected costs associated with the order ticket. */
            readonly amount?: {
                /** @description Projected cost of the order, current reference price times total quantity. */
                readonly amount?: string;
                /** @description Projected commissions and fees associated with the order. */
                readonly commission?: string;
                /** @description Sum of projected cost and commission values for the order. */
                readonly total?: string;
            };
            /** @description Describes the projected change to the account's equity. */
            readonly equity?: {
                /** @description Current equity. */
                readonly current?: string;
                /** @description Difference between current and projected equity values. */
                readonly change?: string;
                /** @description Projected equity after execution of the order. */
                readonly after?: string;
            };
            /** @description Describes the projected change to initial margin. */
            readonly initial?: {
                /** @description Current initial margin. */
                readonly current?: string;
                /** @description Difference between current and projected initial margin values. */
                readonly change?: string;
                /** @description Projected initial margin after execution of the order. */
                readonly after?: string;
            };
            /** @description Describes the projected change to maintenance margin. */
            readonly maintenance?: {
                /** @description Current maintenance margin. */
                readonly current?: string;
                /** @description Difference between current and projected maintenance margin values. */
                readonly change?: string;
                /** @description Projected maintenance margin after execution of the order. */
                readonly after?: string;
            };
            /** @description Describes the projected change to the account's position in the instrument. */
            readonly position?: {
                /** @description Current position in the instrument. */
                readonly current?: string;
                /** @description Difference between current and projected position sizes. */
                readonly change?: string;
                /** @description Projected position size after execution of the order. */
                readonly after?: string;
            };
            /** @description Human-readable text of warning message, if applicable. Otherwise null. */
            readonly warn?: string;
            /** @description Human-readable text of an error message, if applicable. Otherwise null. */
            readonly error?: string;
        };
        /** @description An array containing objects that each deliver the order reply messages emitted against one order ticket in the submission request's array.  Indicies of the order reply message objects in this array correspond to the indicies of the order tickets in the submission request's array. */
        readonly orderReplyMessage: readonly {
            /** @description The replyId UUID of the order ticket's emitted order reply messages, used to confirm them and proceed. Use the POST /iserver/reply/{replyId} endpoint to confirm an order reply message. */
            readonly id?: string;
            /** @description Internal use. Always delivers value 'false'. */
            readonly isSuppressed?: boolean;
            /** @description An array containing the human-readable text of all order reply messages emitted for the order ticket. */
            readonly message?: readonly string[];
            /** @description An array containing identifiers that categorize the types of order reply messages that have been emitted.  Elements of this array are ordered so that indicies match the corresponding human-readable text strings in the 'message' array. A messageId can typically be passed in the POST /iserver/questions/suppress endpoint to auto-accept a given warning message. */
            readonly messageIds?: readonly string[];
        }[];
        /** @description Object containing information about the status of an order ticket. */
        readonly orderStatus: {
            /** @description Internal use only. */
            readonly sub_type?: string;
            /** @description Internal use only. IB-assigned identifier for the status request. */
            readonly request_id?: string;
            /** @description IB-assigned meta-identifier used to associate rejected and resubmitted orders following Server Prompts. */
            readonly server_id?: string;
            /**
             * Format: int32
             * @description The IB-assigned order identifier of the order, as provided in the request path.
             */
            readonly order_id?: number;
            /** @description Contract ID and routing destination in format 123456@EXCHANGE. */
            readonly conidex?: string;
            /** @description Contract ID of the order's instrument. */
            readonly conid?: string;
            /** @description Symbol of the order ticket's instrument. */
            readonly symbol?: string;
            /**
             * @description Side of the order ticket.
             * @enum {string}
             */
            readonly side?: "BUY" | "SELL";
            /** @description Human-readable description of the order's instrument. */
            readonly contract_description_1?: string;
            /** @description Primary listing exchange of the order ticket's instrument. */
            readonly listing_exchange?: string;
            /** @description Internal use only. */
            readonly option_acct?: string;
            /** @description Name of the company or asset associated with the instrument. */
            readonly company_name?: string;
            /** @description Remaining unfilled size of the order ticket. Will reflect 0.0 if order is filled in full, cancelled, or otherwise resolved and no longer working. */
            readonly size?: string;
            /** @description The total size of the order ticket. */
            readonly total_size?: string;
            /** @description The currency in which the instrument trades and executions are conducted. */
            readonly currency?: string;
            /** @description The account receiving executions against this order ticket. */
            readonly account?: string;
            /** @description The order's  IB order type. */
            readonly order_type?: string;
            /** @description Cumulative filled quantity of the instrument against the order ticket. */
            readonly cum_fill?: string;
            /**
             * @description Status of the order ticket.
             * @enum {string}
             */
            readonly order_status?: "Inactive" | "PendingSubmit" | "PreSubmitted" | "Submitted" | "Filled" | "PendingCancel" | "Cancelled" | "WarnState";
            /** @description IB internal order status. */
            readonly order_ccp_status?: string;
            /** @description Human-readable rendering of the order's status meant for presentation in UI. */
            readonly order_status_description?: string;
            /**
             * @description Time in force of the order ticket.
             * @enum {string}
             */
            readonly tif?: "DAY" | "IOC" | "GTC" | "OPG" | "PAX";
            /** @description Internal use. IB's UI foreground color in hex. */
            readonly fgColor?: string;
            /** @description Internal use. IB's UI background color in hex. */
            readonly bgColor?: string;
            /** @description Indicates whether the order ticket can be modified. */
            readonly order_not_editable?: boolean;
            /** @description Indicates which fields of the order ticket can be modified currently. */
            readonly editable_fields?: string;
            /** @description Indicates whether the order ticket can be cancelled. */
            readonly cannot_cancel_order?: boolean;
            /** @description Indicates whether the order ticket can be deactivated. */
            readonly deactivate_order?: boolean;
            /**
             * @description IB asset class identifier.
             * @enum {string}
             */
            readonly sec_type?: "STK" | "OPT" | "FUT" | "FOP" | "CASH" | "CRYPTO" | "BOND" | "WAR" | "FUND";
            /** @description Internal use. Indicates chart periods available for the instrument. */
            readonly available_chart_periods?: string;
            /** @description Human-readable description of the status or current result of the order ticket, meant for UI presentation. */
            readonly order_description?: string;
            /** @description Human-readable description of the status or current result of the order ticket, meant for UI presentation. Includes instrument name. */
            readonly order_description_with_contract?: string;
            /**
             * Format: int32
             * @description Indicates that an alert is active for the order ticket.
             * @enum {integer}
             */
            readonly alert_active?: 0 | 1;
            /**
             * @description Indicates if the order ticket is hedged, and if so, in what way. 0 = No hedge, A = Attached child hedge order, B = Beta/portfolio hedge
             * @enum {string}
             */
            readonly child_order_type?: "0" | "A" | "B";
            /** @description The IB account to which the order ticket clears. */
            readonly order_clearing_account?: string;
            /** @description A string reflecting the cumulative fills and total size of the order. */
            readonly size_and_fills?: string;
            /** @description Internal use. The UI-displayed price associated with a Client Portal exist strategy. */
            readonly exit_strategy_display_price?: string;
            /** @description Internal use. A string describing an active Client Portal exit strategy, or the result of its execution. */
            readonly exit_strategy_chart_description?: string;
            /** @description Average price of fills against the order, if any. */
            readonly average_price?: string;
            /** @description Internal use. Indicates the availability of Client Portal exit strategy tool for the order. */
            readonly exit_strategy_tool_availability?: string;
            /** @description Indicates whether an identical order on the opposite side can be placed. */
            readonly allowed_duplicate_opposite?: boolean;
            /** @description Time of the order's submission in format YYMMDDhhmmss. */
            readonly order_time?: string;
        };
        /** @description Indicates that the order reply message or submission was not accepted. */
        readonly orderSubmitError: {
            /** @description Message indicating that order submission was not successful. */
            readonly error?: string;
        };
        /** @description A successful submission of one or more order tickets. */
        readonly orderSubmitSuccess: readonly {
            /** @description The order ID assigned to your order ticket by IB. Contains only numerals. */
            readonly order_id?: string;
            /** @description Status describing where the order stands in its lifecycle. */
            readonly order_status?: string;
            /** @description Internal use only. */
            readonly encrypt_message?: string;
        }[];
        readonly ordersSubmissionRequest: {
            /** @description Array of order tickets objects. Only one order ticket object may be submitted per request, unless constructing a bracket. */
            readonly orders?: readonly components["schemas"]["singleOrderSubmissionRequest"][];
        };
        readonly performanceResponse: {
            /** @description Confirms if the currency type. If trading exclusively in your base currency, "base" will be returned. */
            readonly currencyType?: string;
            /**
             * Format: int32
             * @description Returns the data identifier (Internal Use Only).
             */
            readonly rc?: number;
            /** @description Net asset value data for the account or consolidated accounts. NAV data is not applicable to benchmarks. */
            readonly nav?: {
                /** @description Contains the affiliated 'nav' data. */
                readonly data?: readonly {
                    /** @description Returns how identifiers are determined. */
                    readonly idType?: string;
                    /** @description Returns sequential data points corresponding to the net asset value between the "start" and "end" days. */
                    readonly navs?: readonly unknown[];
                    /** @description Returns the first available date for data. */
                    readonly start?: string;
                    /** @description Returns the end of the available frequency. */
                    readonly end?: string;
                    /** @description Returns the account identifier. */
                    readonly id?: string;
                    /** @description Returns the intiial NAV available. */
                    readonly startNAV?: {
                        /** @description Returns the starting date for the request. */
                        readonly date?: string;
                        /**
                         * Format: int32
                         * @description Returns the Net Asset Value of the account.
                         */
                        readonly val?: number;
                    };
                    /** @description Returns the base currency used in the account. */
                    readonly baseCurrency?: string;
                }[];
                /** @description Displays the values corresponding to a given frequency. */
                readonly freq?: string;
                /** @description Returns the array of dates formatted as strings corresponding to your frequency, the length should be same as the length of returns inside data. */
                readonly dates?: readonly unknown[];
            };
            /**
             * Format: int32
             * @description Returns the total data points.
             */
            readonly nd?: number;
            /** @description Returns the object containing the Cumulative performance data. */
            readonly cps?: {
                /** @description Returns the array of cps data available. */
                readonly data?: readonly {
                    /** @description Returns the key value of the request. */
                    readonly idType?: string;
                    /** @description Returns the starting value of the value range. */
                    readonly start?: string;
                    /** @description Returns the ending value of the value range. */
                    readonly end?: string;
                    /** @description Returns all cps values in order between the start and end times. */
                    readonly returns?: readonly unknown[];
                    /** @description Returns the account identifier. */
                    readonly id?: string;
                    /** @description Returns the base curency for the account. */
                    readonly baseCurrency?: string;
                }[];
                /** @description Returns the determining frequency of the data range. */
                readonly freq?: string;
                /** @description Returns the dates corresponding to the frequency of data. */
                readonly dates?: readonly unknown[];
            };
            /** @description Returns the time period performance data. */
            readonly tpps?: {
                /** @description Object containing all data about tpps. */
                readonly data?: readonly {
                    /** @description Returns the key value of the request. */
                    readonly idType?: string;
                    /** @description Returns the starting value of the value range. */
                    readonly start?: string;
                    /** @description Returns the ending value of the value range. */
                    readonly end?: string;
                    /** @description Returns all cps values in order between the start and end times. */
                    readonly returns?: readonly unknown[];
                    /** @description Returns the account identifier. */
                    readonly id?: string;
                    /** @description Returns the base curency for the account. */
                    readonly baseCurrency?: string;
                }[];
                /** @description Returns the determining frequency of the data range. */
                readonly freq?: string;
                /** @description Returns the dates corresponding to the frequency of data. */
                readonly dates?: readonly unknown[];
            };
            /** @description Returns the request identifier, getPerformanceData. */
            readonly id?: string;
            /** @description Returns an array containing accounts reviewed. */
            readonly included?: readonly unknown[];
            /** @description Portfolio Measure. Used to indicate TWR or MWR values returned. */
            readonly pm?: string;
        };
        readonly pnlPartitionedResponse: {
            /** @description Refers to the U accounts PnL. This does reference Realized Profit and Loss. */
            readonly upnl?: {
                /** @description The account or model's Profit and Loss. */
                readonly "U1234567.Core"?: {
                    /**
                     * Format: int32
                     * @description Returns the positional value of the returned account. Always returns 1 for individual accounts.
                     */
                    readonly rowType?: number;
                    /**
                     * Format: int32
                     * @description Daily PnL for the specified account profile.
                     */
                    readonly dpl?: number;
                    /**
                     * Format: int32
                     * @description Net Liquidity for the specified account profile.
                     */
                    readonly nl?: number;
                    /**
                     * Format: int32
                     * @description Unrealized PnL for the specified account profile.
                     */
                    readonly upl?: number;
                    /**
                     * Format: int32
                     * @description Excess Liquidity for the specified account profile.
                     */
                    readonly el?: number;
                    /**
                     * Format: int32
                     * @description Margin value for the specified account profile.
                     */
                    readonly mv?: number;
                };
            };
        };
        readonly portfolioAllocations: {
            /** @description Object containing values of positions sorted by long/short and asset class. */
            readonly assetClass?: {
                /** @description Object containing value of long positions in the account aggregated by asset class. */
                readonly long?: {
                    readonly [key: string]: number;
                };
                /** @description Object containing value of short positions in the account aggregated by asset class. */
                readonly short?: {
                    readonly [key: string]: number;
                };
            };
            /** @description Object containing values of positions sorted by long/short and Sector Group. */
            readonly group?: {
                /** @description Object containing value of long positions in the account aggregated by Sector Group. */
                readonly long?: {
                    readonly [key: string]: number;
                };
                /** @description Object containing value of short positions in the account aggregated by Sector Group. */
                readonly short?: {
                    readonly [key: string]: number;
                };
            };
            /** @description Object containing values of positions sorted by long/short and Sector. */
            readonly sector?: {
                /** @description Object containing value of long positions in the account aggregated by Sector. */
                readonly long?: {
                    readonly [key: string]: number;
                };
                /** @description Object containing value of short positions in the account aggregated by Sector. */
                readonly short?: {
                    readonly [key: string]: number;
                };
            };
        };
        readonly portfolioSummary: {
            readonly accountcode?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly accountready?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly accounttype?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly accruedcash?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "accruedcash-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "accruedcash-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly accrueddividend?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "accrueddividend-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "accrueddividend-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly availablefunds?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availablefunds-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availablefunds-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly availabletotrade?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availabletotrade-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availabletotrade-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly availabletowithdraw?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availabletowithdraw-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "availabletowithdraw-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly billable?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "billable-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "billable-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly buyingpower?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "columnprio-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "columnprio-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly cushion?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly daytradesremaining?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "daytradesremainingt+1"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "daytradesremainingt+2"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "daytradesremainingt+3"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "daytradesremainingt+4"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "daytradingstatus-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly depositoncredithold?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly equitywithloanvalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "equitywithloanvalue-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "equitywithloanvalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly excessliquidity?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "excessliquidity-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "excessliquidity-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly fullavailablefunds?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullavailablefunds-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullavailablefunds-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly fullexcessliquidity?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullexcessliquidity-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullexcessliquidity-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly fullinitmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullinitmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullinitmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly fullmaintmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullmaintmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "fullmaintmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly grosspositionvalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "grosspositionvalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly guarantee?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "guarantee-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "guarantee-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly highestseverity?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly indianstockhaircut?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "indianstockhaircut-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "indianstockhaircut-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly initmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "initmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "initmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "leverage-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly lookaheadavailablefunds?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadavailablefunds-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadavailablefunds-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly lookaheadexcessliquidity?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadexcessliquidity-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadexcessliquidity-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly lookaheadinitmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadinitmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadinitmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly lookaheadmaintmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadmaintmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "lookaheadmaintmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly lookaheadnextchange?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly maintmarginreq?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "maintmarginreq-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "maintmarginreq-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly netliquidation?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "netliquidation-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "netliquidation-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly netliquidationuncertainty?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly nlvandmargininreview?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly pasharesvalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "pasharesvalue-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "pasharesvalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly physicalcertificatevalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "physicalcertificatevalue-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "physicalcertificatevalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly postexpirationexcess?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "postexpirationexcess-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "postexpirationexcess-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly postexpirationmargin?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "postexpirationmargin-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "postexpirationmargin-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly previousdayequitywithloanvalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "previousdayequitywithloanvalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly regtequity?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "regtequity-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly regtmargin?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "regtmargin-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "segmenttitle-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "segmenttitle-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly sma?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "sma-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly totalcashvalue?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "totalcashvalue-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "totalcashvalue-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly totaldebitcardpendingcharges?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "totaldebitcardpendingcharges-c"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "totaldebitcardpendingcharges-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly "tradingtype-s"?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
            readonly whatifpmenabled?: Record<string, never> & components["schemas"]["portfolioSummaryValue"];
        };
        readonly portfolioSummaryValue: {
            /** @description Numerical data for the associated key. */
            readonly amount?: number;
            /** @description The currency in which the value of the 'amount' field is denominated. */
            readonly currency?: number;
            /** @description Indicates whether the associated key's value does not exist, as opposed to a value of zero. */
            readonly isNull?: boolean;
            /**
             * Format: int32
             * @description severity
             */
            readonly severity?: number;
            /**
             * Format: int32
             * @description Unix epoch timestamp of returned data in milliseconds.
             */
            readonly timestamp?: number;
            /** @description String and boolean (non-numerical) data for the associated key. */
            readonly value?: string;
        };
        readonly presets: {
            /** @description Determines if allocation groups should prioritize closing positions over equal distribution. */
            readonly group_auto_close_positions?: boolean;
            /**
             * @description Interactive Brokers supports two forms of allocation methods. Allocation methods that have calculations completed by Interactive Brokers, and a set of allocation methods calculated by the user and then specified. IB-computed allocation methods:
             *       * `A` - Available Equity
             *       * `E` - Equal
             *       * `N` - Net Liquidation Value
             *
             *     User-specified allocation methods:
             *       * `C` - Cash Quantity
             *       * `P` - Percentage
             *       * `R` - Ratios
             *       * `S` - Shares
             * @enum {unknown}
             */
            readonly default_method_for_all?: "AvailableEquity" | "E" | "N" | "C" | "P" | "R" | "S";
            /** @description Determines if allocation profiles should prioritize closing positions over equal distribution. */
            readonly profiles_auto_close_positions?: boolean;
            /** @description Determines if the system should always check user credit before beginning the order process every time, or only at the time of order placement and execution. */
            readonly strict_credit_check?: boolean;
            /** @description Determines if the system should keep allocation groups proportional for scaling. */
            readonly group_proportional_allocation?: boolean;
        };
        readonly scheduleResponse: {
            /** @description Returns the time zone the exchange trades in. */
            readonly exchange_time_zone?: string;
            /** @description Returns a series of date objects of the given contract. */
            readonly schedules?: {
                /** @description object containing the  of hours objects detailing extended and liquid trading. */
                readonly date?: {
                    readonly extended_hours?: readonly unknown[];
                    readonly liquid_hours?: readonly unknown[];
                };
            };
        };
        readonly secDefInfoResponse: {
            /**
             * Format: int32
             * @description Contract Identifier of the given contract.
             */
            readonly conid?: number;
            /** @description Ticker symbol for the given contract */
            readonly ticker?: string;
            /** @description Security type for the given contract. */
            readonly secType?: string;
            /** @description Primary listing exchange for the given contract. */
            readonly listingExchange?: string;
            /** @description Exchange requesting data for. */
            readonly exchange?: string;
            /** @description Name of the company for the given contract. */
            readonly companyName?: string;
            /** @description Traded currency allowed for the given contract. */
            readonly currency?: string;
            /** @description Series of all valid exchanges the contract can be traded on in a single comma-separated string. */
            readonly validExchanges?: string;
            readonly priceRendering?: unknown;
            /** @description Date of expiration for the given contract. */
            readonly maturityDate?: string | null;
            /**
             * @description Set the right for the given contract. * `C` - for Call options. * `P` - for Put options.
             * @enum {string}
             */
            readonly right?: "P" | "C";
            /** @description Returns the given strike value for the given contract. */
            readonly strike?: number;
        };
        readonly secdefSearchResponse: readonly {
            /**
             * Format: int32
             * @description applicable for bonds
             */
            readonly bondid?: number;
            /** @description Contract identifier for the unique contract. */
            readonly conid?: string;
            /** @description Company Name - Exchange */
            readonly companyHeader?: string;
            /** @description Formal name of the company. */
            readonly companyName?: string;
            /** @description Underlying ticker symbol. */
            readonly symbol?: string;
            /** @description Primary exchange of the contract */
            readonly description?: string;
            /** @description Returns if the contract is available for trading. */
            readonly restricted?: boolean | null;
            /** @description Returns a string of dates, separated by semicolons. */
            readonly fop?: string | null;
            /** @description Returns a string of dates, separated by semicolons. */
            readonly opt?: string | null;
            /** @description Returns a string of dates, separated by semicolons. */
            readonly war?: string | null;
            readonly sections?: readonly {
                readonly secType?: string;
                /** @description semicolon separated list of months */
                readonly months?: string;
                /** @description semicolon separated list of exchanges */
                readonly exchange?: string;
            }[];
            readonly issuers?: readonly {
                readonly id?: string;
                readonly name?: string;
            }[];
        }[];
        readonly setAccountResponse: {
            /** @description Confirms that the account change was set */
            readonly set?: boolean;
            /** @description Confirms the account switched to. */
            readonly acctId?: string;
        };
        readonly signatureAndOwners: {
            /** @description Account identifier */
            readonly accountId?: string;
            readonly users?: readonly components["schemas"]["user"][];
            readonly applicant?: {
                /** @description All names attached to the account */
                readonly signatures?: readonly string[];
            };
        };
        /** @description Object containing data for a single OHLC bar. */
        readonly singleHistoricalBar: {
            /** @description Opening value of the bar. */
            readonly o?: number;
            /** @description Closing value of the bar. */
            readonly c?: number;
            /** @description High value of the bar. */
            readonly h?: number;
            /** @description Low value of the bar. */
            readonly l?: number;
            /** @description Volume value of the bar, returned only for "Last" barType. */
            readonly v?: number;
            /**
             * Format: int32
             * @description Unix timestamp of the start (chronologically earlier) of the bar.
             */
            readonly t?: number;
        };
        /** @description Object containing Bid and Ask data for a single OHLC bar. */
        readonly singleHistoricalBarBidAsk: {
            /** @description Opening value of the bar. Indicates the time average bid during the bar. */
            readonly o?: number;
            /** @description Closing value of the bar. Indicates the time average ask during the bar. */
            readonly c?: number;
            /** @description High value of the bar. Indicates the highest ask price during the bar. */
            readonly h?: number;
            /** @description Low value of the bar. Indicates the lowest bid price during the bar. */
            readonly l?: number;
            /** @description Volume value of the bar. Always returns 0. */
            readonly v?: number;
            /**
             * Format: int32
             * @description Unix timestamp of the start (chronologically earlier) of the bar.
             */
            readonly t?: number;
        };
        /** @description Object containing Last or Trades data for a single OHLC bar. */
        readonly singleHistoricalBarLast: {
            /** @description Opening value of the bar. Indicates first traded price of the bar. */
            readonly o?: number;
            /** @description Closing value of the bar. Indicates the final traded price of the bar. */
            readonly c?: number;
            /** @description High value of the bar. Indicates the highest traded price of the bar. */
            readonly h?: number;
            /** @description Low value of the bar. Indicates the lowest traded price of the bar. */
            readonly l?: number;
            /** @description Volume value of the bar, returned only for "Last" barType. */
            readonly v?: number;
            /**
             * Format: int32
             * @description Unix timestamp of the start (chronologically earlier) of the bar.
             */
            readonly t?: number;
        };
        /** @description Object containing Midpoint data for a single OHLC bar. */
        readonly singleHistoricalBarMidpoint: {
            /** @description Opening value of the bar. Indicates the starting midpoint price traded price during the bar. */
            readonly o?: number;
            /** @description Closing value of the bar. Indicates the last midpoint price traded price during the bar. */
            readonly c?: number;
            /** @description High value of the bar. Indicates the highest midpoint price traded price during the bar. */
            readonly h?: number;
            /** @description Low value of the bar. Indicates the lowest midpoint price traded price during the bar. */
            readonly l?: number;
            /** @description Volume value of the bar. Always returns 0. */
            readonly v?: number;
            /**
             * Format: int32
             * @description Unix timestamp of the start (chronologically earlier) of the bar.
             */
            readonly t?: number;
        };
        /** @description A single order ticket. */
        readonly singleOrderSubmissionRequest: {
            /** @description Receiving account of the order ticket. */
            readonly acctId?: string;
            /**
             * Format: int32
             * @description IB contract ID of the instrument.
             */
            readonly conid: number;
            /** @description Contract ID and routing destination together in format 123456@EXCHANGE. */
            readonly conidex?: string;
            /** @description IB asset class identifier. */
            readonly secType?: string;
            /** @description Client-configurable order identifier. */
            readonly cOID?: string;
            /** @description If the order ticket is a child order in a bracket, the parentId field must be set equal to the cOID provided for the parent order. */
            readonly parentId?: string;
            /** @description The listing exchange of the instrument. */
            readonly listingExchange?: string;
            /** @description Indicates that all orders in the containing array are to be treated as an OCA group. */
            readonly isSingleGroup?: boolean;
            /** @description Instructs IB to permit the order to execute outside of regular trading hours. */
            readonly outsideRTH?: boolean;
            /** @description Instructs IB to execute the order  entirely or not execute at all. */
            readonly allOrNone?: boolean;
            /** @description Additional price value used in certain order types, such as stop orders. */
            readonly auxPrice?: number;
            /** @description Ticker symbol of the instrument. */
            readonly ticker?: string;
            /** @description Offset used with Trailing orders. */
            readonly trailingAmt?: number;
            /**
             * @description Specifies the type of trailing used with a Trailing order.
             * @enum {string}
             */
            readonly trailingType?: "amt" | "%";
            /** @description IB internal identifier for order entry UI element. */
            readonly referrer?: string;
            /** @description Quantity of currency used with cash quantity orders. */
            readonly cashQty?: number;
            /** @description Instructs IB to apply the Price Management Algo. */
            readonly useAdaptive?: boolean;
            /** @description Indicates that a forex order is for currency conversion and should not entail a virtual forex position in the account, where applicable. */
            readonly isCcyConv?: boolean;
            /** @description IB order type identifier. */
            readonly orderType: string;
            /** @description Price of the order ticket, where applicable. */
            readonly price?: number;
            /**
             * @description Side of the order ticket.
             * @enum {string}
             */
            readonly side: "BUY" | "SELL";
            /**
             * @description Time in force of the order ticket.
             * @enum {string}
             */
            readonly tif: "DAY" | "IOC" | "GTC" | "OPG" | "PAX";
            /** @description Quantity of the order ticket in units of the instrument. */
            readonly quantity: number;
            /** @description The name of an execution algorithm. */
            readonly strategy?: string;
            /** @description Parameters governing the selected algorithm, if applicable. */
            readonly strategyParameters?: {
                /** @description Placeholder -- these vary by algo (and not always type string, sometimes bool) */
                readonly PLACEHOLDER?: string;
            };
            /** @description ExtOperator is used to identify external operator */
            readonly extOperator?: string;
            /** @description For all orders for US Futures products, clients must submit this flag to indicate whether the order was originated manually (by a natural person) or automatically (by an automated trading system transmitting orders without human intervention). Submit a True value to indicate a manually originated order, and submit a False value to indicate an automated order. Orders for USFUT products that do not include this field will be rejected. */
            readonly manualIndicator?: boolean;
            /** @description Identifies set of tax lots selected, for gains and losses management. */
            readonly taxOptimizerId?: string;
        };
        /** @description Object detailing a single watchlist. */
        readonly singleWatchlist: {
            /** @description Identifier of the watchlist. */
            readonly id?: string;
            /** @description Internal use. Unique hash of the watchlist. */
            readonly hash?: string;
            /** @description Human-readable display name of the watchlist. */
            readonly name?: string;
            /** @description Indicates whether the watchlist can be edited. */
            readonly readOnly?: boolean;
            /** @description Array of instruments contained in the watchlist. */
            readonly instruments?: readonly components["schemas"]["singleWatchlistEntry"][];
        };
        /** @description Object containing watchlist entry for a single instrument. */
        readonly singleWatchlistEntry: {
            /**
             * @description All-capital, shorthand security type identifier of the instrument.
             * @enum {string}
             */
            readonly ST?: "STK" | "OPT" | "FUT" | "BOND" | "FUND" | "WAR" | "CASH" | "CRYPTO";
            /** @description Instrument conid as a string. */
            readonly C?: string;
            /**
             * Format: int32
             * @description IB contract ID of the instrument.
             */
            readonly conid?: number;
            /** @description Complete display name of the instrument. */
            readonly name?: string;
            /** @description Full display presentation of the instrument symbol. */
            readonly fullName?: string;
            /**
             * @description All-capital, shorthand security type identifier of the instrument.
             * @enum {string}
             */
            readonly assetClass?: "STK" | "OPT" | "FUT" | "BOND" | "FUND" | "WAR" | "CASH" | "CRYPTO";
            /** @description Symbol of the instrument. */
            readonly ticker?: string;
            /** @description Rendering of the instrument name in Chinese. */
            readonly chineseName?: string;
        };
        readonly ssoValidateResponse: {
            /**
             * Format: int32
             * @description Internal user identifier.
             */
            readonly USER_ID?: number;
            /** @description current username logged in for the session. */
            readonly USER_NAME?: string;
            /** @description Confirms if validation was successful. True if session was validated; false if not. */
            readonly RESULT?: boolean;
            /**
             * Format: int32
             * @description Returns the time of authentication in epoch time.
             */
            readonly AUTH_TIME?: number;
            /** @description (Internal use only) */
            readonly SF_ENABLED?: boolean;
            /** @description Returns if the account is a trial account or a funded account. */
            readonly IS_FREE_TRIAL?: boolean;
            /** @description Returns the underlying username of the account. */
            readonly CREDENTIAL?: string;
            /** @description Internal use only. Does not reflect the IP address of the user. */
            readonly IP?: string;
            /**
             * Format: int32
             * @description Returns the time until SSO session expiration in milliseconds.
             */
            readonly EXPIRES?: number;
            /** @description Returns if the customer requires two factor authentication. */
            readonly QUALIFIED_FOR_MOBILE_AUTH?: boolean;
            /** @description Used for Client Portal (Internal use only) */
            readonly LANDING_APP?: string;
            /** @description Returns whether the account is a master account (true) or subaccount (false). */
            readonly IS_MASTER?: boolean;
            /**
             * Format: int32
             * @description Returns the last time the user was accessed in epoch time.
             */
            readonly lastAccessed?: number;
            /**
             * Format: int32
             * @description Returns the login type. 1 for Live, 2 for Paper
             */
            readonly loginType?: number;
            /** @description Returns the paper username for the account. */
            readonly PAPER_USER_NAME?: string;
            /** @description Returns supported features such as bonds and option trading. */
            readonly features?: {
                /** @description Returns the connecting environment to distinguish production or paper. */
                readonly envs?: string;
                /** @description Internal Use Only */
                readonly wlms?: boolean;
                /** @description Returns if realtime market data is available */
                readonly realtime?: boolean;
                /** @description Returns if bonds can be traded. */
                readonly bond?: boolean;
                /** @description Returns if option chains can be retrieved in the account. */
                readonly optionChains?: boolean;
                /** @description Returns if trading calendars are enabled */
                readonly calendar?: boolean;
                /** @description Internal Use Only */
                readonly newMf?: boolean;
            };
            /** @description Returns the region connected to internally. */
            readonly region?: string;
        };
        readonly stocks: {
            readonly [key: string]: readonly {
                /** @description Full company name for the given contract. */
                readonly name?: string;
                /** @description Chinese name for the given company as unicode. */
                readonly chineseName?: string;
                /** @description Asset class for the given company. */
                readonly assetClass?: string;
                /** @description A series of arrays pertaining to the same company listed by "name". Typically differentiated based on currency of the primary exchange. */
                readonly contracts?: readonly {
                    /**
                     * Format: int32
                     * @description Contract ID for the specific contract.
                     */
                    readonly conid?: number;
                    /** @description Primary exchange for the given contract. */
                    readonly exchange?: string;
                    /** @description States whether the contract is hosted in the United States or not. */
                    readonly isUS?: boolean;
                }[];
            }[];
        };
        readonly subAccounts: {
            /** @description An array containing all sub-accounts held by the advisor. */
            readonly accounts?: readonly {
                /** @description Contains Net liquidation and available equity of the given account Id. */
                readonly data?: readonly unknown[];
                /** @description Returns the account ID affiliated with the balance data. */
                readonly name?: string;
            }[];
        };
        readonly successfulTickleResponse: {
            /** @description Returns the session token of the contract. */
            readonly session?: string;
            /**
             * Format: int32
             * @description Returns the number of milliseconds until the current sso session expires.
             */
            readonly ssoExpires?: number;
            /** @description (Internal Use Only) */
            readonly collission?: boolean;
            /**
             * Format: int32
             * @description (Internal Use Only)
             */
            readonly userId?: number;
            /** @description Returns connection details for the historical market data server. */
            readonly hmds?: {
                /** @description Relays any internal connection errors. */
                readonly error?: string;
                /** @description Returns authentication details. */
                readonly authStatus?: readonly unknown[];
            };
            readonly iserver?: {
                readonly authStatus?: components["schemas"]["brokerageSessionStatus"];
            };
        };
        readonly summaryMarketValueResponse: {
            /** @description Returns an object containing market value details of the currency and positions held using that currency. */
            readonly currency?: {
                /** @description Lists the total cash held for the given currency. */
                readonly total_cash?: string;
                /** @description Cash recognized at the time of settlement minus the purchases at time of trade, commissions, taxes, and fees. */
                readonly settled_cash?: string;
                /** @description Total Month-to-date interest. */
                readonly "MTD Interest"?: string;
                /** @description Total cash value of stocks held. */
                readonly stock?: string;
                /** @description Total cash value of options held. */
                readonly options?: string;
                /** @description Total cash value of futures held. */
                readonly futures?: string;
                /** @description Total cash value of future options held. */
                readonly future_options?: string;
                /** @description Total cash value of funds held. */
                readonly funds?: string;
                /** @description Total cash value of receivable dividends. */
                readonly dividends_receivable?: string;
                /** @description Total cash value of mutual funds held. */
                readonly mutual_funds?: string;
                /** @description Total cash value of money market securities held. */
                readonly money_market?: string;
                /** @description Total cash value of bonds held. */
                readonly bonds?: string;
                /** @description Total cash value of goverment bonds held. */
                readonly "Govt Bonds"?: string;
                /** @description Total cash value of t-bill bonds held. */
                readonly t_bills?: string;
                /** @description Total cash value of warrants held. */
                readonly warrants?: string;
                /** @description Total cash value of issuer options held. */
                readonly issuer_option?: string;
                /** @description Total cash value of commodities held. */
                readonly commodity?: string;
                /** @description Total cash value of notional CFDs held. */
                readonly "Notional CFD"?: string;
                /** @description Total cash value of CFDs held. */
                readonly cfd?: string;
                /** @description Total cash value of Cryptocurrencies held. */
                readonly Cryptocurrency?: string;
                /** @description Total cash value of your net liquidty. */
                readonly net_liquidation?: string;
                /** @description Total daily unrealized profit and loss. */
                readonly unrealized_pnl?: string;
                /** @description Total daily realized profit and loss. */
                readonly realized_pnl?: string;
                /** @description Exchange rate of the labeled currency to the base currency. */
                readonly "Exchange Rate"?: string;
            };
        };
        readonly summaryOfAccountBalancesResponse: {
            /** @description Contains total balance details for the account. */
            readonly total?: {
                /** @description The basis for determining the price of the assets in your account. */
                readonly net_liquidation?: string;
                /** @description Displays the uncertainty of the Net Liquidating Value associated with after-hours price changes. */
                readonly "Nt Lqdtn Uncrtnty"?: string;
                /**
                 * @description * `Cash Accounts` Settled cash
                 *      * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
                 */
                readonly equity_with_loan?: string;
                /** @description The accounts equity balance including loan value. */
                readonly "Prvs Dy Eqty Wth Ln Vl"?: string;
                /** @description Equals the sum of the absolute value of all positions except cash, index futures and US treasuries. */
                readonly sec_gross_pos_val?: string;
                /** @description Total cash balance in the account */
                readonly cash?: string;
                /** @description Total Month-to-date interest. */
                readonly "MTD Interest"?: string;
                /** @description Any pending charges for the IBKR debit account. */
                readonly "Pndng Dbt Crd Chrgs"?: string;
            };
            /** @description Contains Commodity-specific balance details. */
            readonly commodities?: {
                /** @description The basis for determining the price of the assets in your account. */
                readonly net_liquidation?: string;
                /**
                 * @description * `Cash Accounts` Settled cash
                 *      * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
                 */
                readonly equity_with_loan?: string;
                /** @description Total cash balance in the account */
                readonly cash?: string;
                /** @description Total Month-to-date interest. */
                readonly "MTD Interest"?: string;
                /** @description Any pending charges for the IBKR debit account. */
                readonly "Pndng Dbt Crd Chrgs"?: string;
            };
            /** @description Contains Security-specific balance details. */
            readonly securities?: {
                /** @description The basis for determining the price of the assets in your account. */
                readonly net_liquidation?: string;
                /**
                 * @description * `Cash Accounts` Settled cash
                 *      * `Margin Accounts` Total cash value + stock value + bond value + fund value + European & Asian options value.
                 */
                readonly equity_with_loan?: string;
                /** @description The accounts equity balance including loan value. */
                readonly "Prvs Dy Eqty Wth Ln Vl"?: string;
                /** @description Equals the sum of the absolute value of all positions except cash, index futures and US treasuries. */
                readonly sec_gross_pos_val?: string;
                /** @description Total cash balance in the account */
                readonly cash?: string;
                /** @description Total Month-to-date interest. */
                readonly "MTD Interest"?: string;
                /** @description Any pending charges for the IBKR debit account. */
                readonly "Pndng Dbt Crd Chrgs"?: string;
            };
        };
        readonly summaryOfAccountMarginResponse: {
            readonly total?: {
                /** @description The minimum amount required to open a new position. */
                readonly current_initial?: string;
                /** @description Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio. */
                readonly "Prdctd Pst-xpry Mrgn @ Opn"?: string;
                /** @description The amount of equity required to maintain your positions. */
                readonly current_maint?: string;
                /** @description Provides a projected "liquid" initial margin value based on account liquidation value. */
                readonly projected_liquidity_inital_margin?: string;
                /**
                 * @description If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open.
                 *      * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account.
                 *      * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
                 */
                readonly "Prjctd Lk Ahd Mntnnc Mrgn"?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * Securities – Projected overnight initial margin requirement in the base currency of the account.
                 *       * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly projected_overnight_initial_margin?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account.
                 *       * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly "Prjctd Ovrnght Mntnnc Mrgn"?: string;
            };
            readonly "Crypto at Paxos"?: {
                /** @description The minimum amount required to open a new position. */
                readonly current_initial?: string;
                /** @description Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio. */
                readonly "Prdctd Pst-xpry Mrgn @ Opn"?: string;
                /** @description The amount of equity required to maintain your positions. */
                readonly current_maint?: string;
                /** @description Provides a projected "liquid" initial margin value based on account liquidation value. */
                readonly projected_liquidity_inital_margin?: string;
                /**
                 * @description If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open.
                 *      * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account.
                 *      * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
                 */
                readonly "Prjctd Lk Ahd Mntnnc Mrgn"?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * Securities – Projected overnight initial margin requirement in the base currency of the account.
                 *       * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly projected_overnight_initial_margin?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account.
                 *       * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly "Prjctd Ovrnght Mntnnc Mrgn"?: string;
            };
            readonly commodities?: {
                /** @description The current RegT margin in use. */
                readonly "RegT Margin"?: string;
                /** @description The minimum amount required to open a new position. */
                readonly current_initial?: string;
                /** @description Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio. */
                readonly "Prdctd Pst-xpry Mrgn @ Opn"?: string;
                /** @description The amount of equity required to maintain your positions. */
                readonly current_maint?: string;
                /** @description Provides a projected "liquid" initial margin value based on account liquidation value. */
                readonly projected_liquidity_inital_margin?: string;
                /**
                 * @description If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open.
                 *      * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account.
                 *      * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
                 */
                readonly "Prjctd Lk Ahd Mntnnc Mrgn"?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * Securities – Projected overnight initial margin requirement in the base currency of the account.
                 *       * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly projected_overnight_initial_margin?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account.
                 *       * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly "Prjctd Ovrnght Mntnnc Mrgn"?: string;
            };
            readonly securities?: {
                /** @description The minimum amount required to open a new position. */
                readonly current_initial?: string;
                /** @description Provides a projected "at expiration" margin value based on the soon-to-expire contracts in your portfolio. */
                readonly "Prdctd Pst-xpry Mrgn @ Opn"?: string;
                /** @description The amount of equity required to maintain your positions. */
                readonly current_maint?: string;
                /** @description Provides a projected "liquid" initial margin value based on account liquidation value. */
                readonly projected_liquidity_inital_margin?: string;
                /**
                 * @description If it is 3:00 pm ET, the next calculation you're looking ahead to is after the close, or the Overnight Initial Margin. If it's 3:00 am ET, the next calculation will be at the market's open.
                 *      * `Securities` – Projected maintenance margin requirement as of next period's margin change, in the base currency of the account.
                 *      * `Commodities` – Maintenance margin requirement as of next period's margin change in the base currency of the account based on current margin requirements, which are subject to change. This value depends on when you are viewing your margin requirements.
                 */
                readonly "Prjctd Lk Ahd Mntnnc Mrgn"?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * Securities – Projected overnight initial margin requirement in the base currency of the account.
                 *       * Commodities – Overnight initial margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly projected_overnight_initial_margin?: string;
                /**
                 * @description Overnight refers to the window of time after the local market trading day is closed.
                 *       * `Securities` – Projected overnight maintenance margin requirement in the base currency of the account.
                 *       * `Commodities` – Overnight maintenance margin requirement in the base currency of the account based on current margin requirements, which are subject to change.
                 */
                readonly "Prjctd Ovrnght Mntnnc Mrgn"?: string;
            };
        };
        readonly tickleResponse: components["schemas"]["successfulTickleResponse"] | components["schemas"]["failedTickleResponse"];
        /** @description Array of objects representing executions. */
        readonly tradesResponse: readonly {
            /** @description IB-assigned execution identifier. */
            readonly execution_id?: string;
            /** @description Symbol of the instrument involved in the execution. */
            readonly symbol?: string;
            /**
             * @description Indicates whether the order is supported by IB's Tax Optimization tool.
             * @enum {string}
             */
            readonly supports_tax_opt?: "0" | "1";
            /**
             * @description Side of the execution.
             * @enum {string}
             */
            readonly side?: "B" | "S";
            /** @description Human-readable description of the outcome of the execution. */
            readonly order_description?: string;
            /** @description UTC date and time of the execution in format YYYYMMDD-hh:mm:ss. */
            readonly trade_time?: string;
            /**
             * Format: int32
             * @description Unix timestamp of the execution time in milliseconds.
             */
            readonly trade_time_r?: number;
            /** @description The size of the execution in units of the instrument. */
            readonly size?: number;
            /** @description The price at which the execution occurred. */
            readonly price?: string;
            /** @description The client-provided customer order identifier. Specified via cOID during order submission in the Web API. */
            readonly order_ref?: string;
            /** @description The IB username that originated the order ticket against which the execution occurred. */
            readonly submitter?: string;
            /** @description The exchange or other venue on which the execution occurred. */
            readonly exchange?: string;
            /** @description Commissions incurred by the execution. May also include */
            readonly commission?: string;
            /** @description net_amount */
            readonly net_amount?: number;
            /** @description The IB account ID of the account that received the execution. */
            readonly account?: string;
            /** @description The IB account ID of the account that received the execution. */
            readonly accountCode?: string;
            /** @description The IB account ID of the account that received the execution. */
            readonly account_allocation_name?: string;
            /** @description Name of business associated with instrument, or otherwise description of instrument. */
            readonly company_name?: string;
            /** @description Human-readable description of the order's instrument. */
            readonly contract_description_1?: string;
            /**
             * @description IB asset class identifier.
             * @enum {string}
             */
            readonly sec_type?: "STK" | "OPT" | "FUT" | "FOP" | "CASH" | "CRYPTO" | "BOND" | "WAR" | "FUND";
            /** @description The primary exchange on which the instrument is listed. */
            readonly listing_exchange?: string;
            /** @description Contract ID of the order's instrument. */
            readonly conid?: string;
            /** @description Contract ID and routing destination in format 123456@EXCHANGE. */
            readonly conidEx?: string;
            /** @description Identifier of the firm clearing the trade. Value is "IB" if account is cleared by Interactive Brokers. */
            readonly clearing_id?: string;
            /** @description Name of the firm clearing the trade. Value is "IB" if account is cleared by Interactive Brokers. */
            readonly clearing_name?: string;
            /**
             * @description Indicates whether the trade is the result of a liquidiation by IB.
             * @enum {string}
             */
            readonly liquidation_trade?: "0" | "1";
            /**
             * @description Indicates whether the order ticket is an Event Trading order.
             * @enum {string}
             */
            readonly is_event_trading?: "0" | "1";
            /** @description Order ID */
            readonly order_id?: number;
        }[];
        /** @description trading's schedules */
        readonly tradingSchedule: readonly {
            /** @description Exchange parameter id */
            readonly id?: string;
            /** @description Reference on a trade venue of given exchange parameter */
            readonly tradeVenueId?: string;
            /** @description short exchange name */
            readonly exchange?: string;
            /** @description exchange description */
            readonly description?: string;
            /** @description References the time zone corresponding to the listed dates and times. */
            readonly timezone?: string;
            /** @description Always contains at least one 'tradingTime' and zero or more 'sessionTime' tags */
            readonly schedules?: readonly unknown[];
        }[];
        readonly transactionsResponse: {
            /**
             * Format: int32
             * @description Client portal use only
             */
            readonly rc?: number;
            /**
             * Format: int32
             * @description Client portal use only
             */
            readonly nd?: number;
            /** @description Returns the object containing the realized pnl for the contract on the date. */
            readonly rpnl?: {
                /** @description Returns an array of realized pnl objects. */
                readonly data?: readonly unknown[];
                readonly items?: {
                    /** @description Specifies the date for the transaction. */
                    readonly date?: string;
                    /** @description Specifies the currency of the realized value. */
                    readonly cur?: string;
                    /**
                     * Format: int32
                     * @description Returns the foreign exchnage rate.
                     */
                    readonly fxRate?: number;
                    /**
                     * @description Determines if the day was a loss or gain * `L` - LOSS * `G` - GAIN
                     * @enum {string}
                     */
                    readonly side?: "L" | "G";
                    /** @description Returns the account ID the trade transacted on. */
                    readonly acctid?: string;
                    /** @description Returns the amount gained or lost on the day. */
                    readonly amt?: string;
                    /** @description Returns the contract ID of the transaction. */
                    readonly conid?: string;
                };
                /** @description Provides the total amount gained or lost from all days returned */
                readonly amt?: string;
            };
            /** @description Returns the currency the account is traded in. */
            readonly currency?: string;
            /**
             * Format: int32
             * @description Returns the epoch time for the start of requests.
             */
            readonly from?: number;
            /** @description Returns the request identifier, getTransactions. */
            readonly id?: string;
            /**
             * Format: int32
             * @description Returns the epoch time for the end of requests.
             */
            readonly to?: number;
            /** @description Returns if the trades are up to date or not. */
            readonly includesRealTime?: boolean;
            /** @description Lists all supported transaction values. */
            readonly transactions?: readonly {
                /** @description Reutrns the human-readable datetime of the transaction. */
                readonly date?: string;
                /** @description Returns the currency of the traded insturment. */
                readonly cur?: string;
                /**
                 * Format: int32
                 * @description Returns the forex conversion rate.
                 */
                readonly fxRate?: number;
                /**
                 * Format: int32
                 * @description Returns the price per share of the transaction.
                 */
                readonly pr?: number;
                /**
                 * Format: int32
                 * @description Returns the total quantity traded. Will display a negative value for sell orders, and a positive value for buy orders.
                 */
                readonly qty?: number;
                /** @description Returns the account which made the transaction. */
                readonly acctid?: string;
                /**
                 * Format: int32
                 * @description Returns the total value of the trade.
                 */
                readonly amt?: number;
                /**
                 * Format: int32
                 * @description Returns the contract identifier.
                 */
                readonly conid?: number;
                /** @description Returns the order side. */
                readonly type?: string;
                /** @description Returns the long name for the company. */
                readonly desc?: string;
            }[];
        };
        /** @description a contract's security definition */
        readonly trsrvSecDefResponse: {
            readonly secdef?: readonly unknown[];
        };
        /**
         * @description Many FYI endpoints reference a "typecode" value. The table below lists the available codes and what they correspond to.
         *       * `BA` - Borrow Availability
         *       * `CA` - Comparable Algo
         *       * `DA` - Dividends Advisory
         *       * `EA` - Upcoming Earnings
         *       * `MF` - Mutual Fund Advisory
         *       * `OE` - Option Expiration
         *       * `PR` - Portfolio Builder Rebalance
         *       * `SE` - Suspend Order on Economic Event
         *       * `SG` - Short Term Gain turning Long Term
         *       * `SM` - System Messages
         *       * `T2` - Assignment Realizing Long-Term Gains
         *       * `TO` - Takeover
         *       * `UA` - User Alert
         *       * `M8` - M871 Trades
         *       * `PS` - Platform Use Suggestions
         *       * `DL` - Unexercised Option Loss Prevention Reminder
         *       * `PT` - Position Transfer
         *       * `CB` - Missing Cost Basis
         *       * `MS` - Milestones
         *       * `TD` - MiFID || 10% Deprecation Notice
         *       * `ST` - Save Taxes
         *       * `TI` - Trade Idea
         *       * `CT` - Cash Transfer
         * @enum {unknown}
         */
        readonly typecodes: "BA" | "CA" | "DA" | "EA" | "MF" | "OE" | "PR" | "SE" | "SG" | "SM" | "T2" | "TO" | "UA" | "M8" | "PS" | "DL" | "PT" | "CB" | "MS" | "TD" | "ST" | "TI" | "CT";
        readonly user: {
            /** @description The role of the username as it relates to the account */
            readonly roleId?: string;
            /** @description Internally used */
            readonly hasRightCodeInd?: boolean;
            /** @description Identifies the username for the designated entity. */
            readonly userName?: string;
            /** @description Provide information about the particular entity */
            readonly entity?: {
                /** @description The full entity's name, concatenating the first and last name fields */
                readonly entityName?: string;
                /**
                 * @description The type of entity assigned to the user
                 * @enum {string}
                 */
                readonly entityType?: "INDIVIDUAL" | "Joint" | "ORG";
                /** @description The first name of the user */
                readonly firstName?: string;
                /** @description The last name of the user */
                readonly lastName?: string;
            };
        };
        readonly userAccountsResponse: {
            /** @description Returns an array of all accessible accountIds. */
            readonly accounts?: readonly string[];
            /** @description Returns an json object for each accessible account's properties. */
            readonly acctProps?: {
                readonly U1234567?: {
                    readonly hasChildAccounts?: boolean;
                    readonly supportsCashQty?: boolean;
                    readonly liteUnderPro?: boolean;
                    readonly noFXConv?: boolean;
                    readonly isProp?: boolean;
                    readonly supportsFractions?: boolean;
                    readonly allowCustomerTime?: boolean;
                    readonly autoFx?: boolean;
                };
            };
            readonly aliases?: {
                readonly U1234567?: string;
            };
            readonly allowFeatures?: {
                readonly showGFIS?: boolean;
                readonly showEUCostReport?: boolean;
                readonly allowEventContract?: boolean;
                readonly allowFXConv?: boolean;
                readonly allowFinancialLens?: boolean;
                readonly allowMTA?: boolean;
                readonly allowTypeAhead?: boolean;
                readonly allowEventTrading?: boolean;
                /**
                 * Format: int64
                 * @example 30
                 */
                readonly snapshotRefreshTimeout?: number;
                readonly liteUser?: boolean;
                readonly showWebNews?: boolean;
                readonly research?: boolean;
                readonly debugPnl?: boolean;
                readonly showTaxOpt?: boolean;
                readonly showImpactDashboard?: boolean;
                readonly allowDynAccount?: boolean;
                readonly allowCrypto?: boolean;
                readonly allowedAssetTypes?: string;
                readonly restrictTradeSubscription?: boolean;
                readonly showUkUserLabels?: boolean;
                readonly sideBySide?: boolean;
            };
            readonly chartPeriods?: {
                readonly STK?: readonly string[];
                readonly CFD?: readonly string[];
                readonly OPT?: readonly string[];
                readonly FOP?: readonly string[];
                readonly WAR?: readonly string[];
                readonly IOPT?: readonly string[];
                readonly FUT?: readonly string[];
                readonly CASH?: readonly string[];
                readonly IND?: readonly string[];
                readonly BOND?: readonly string[];
                readonly FUND?: readonly string[];
                readonly CMDTY?: readonly string[];
                readonly PHYSS?: readonly string[];
                readonly CRYPTO?: readonly string[];
            };
            readonly groups?: readonly string[];
            readonly profiles?: readonly string[];
            readonly selectedAccount?: string;
            readonly serverInfo?: {
                readonly serverName?: string;
                readonly serverVersion?: string;
            };
            readonly sessionId?: string;
            readonly isFt?: boolean;
            readonly isPaper?: boolean;
        };
        /**
         * @description UTC datetime string in format YYYYMMDD-hh:mm:ss.
         * @example 20231018-16:00:00
         */
        readonly utcDateTime: string;
        /** @description Object detailing the successful deletion of a watchlist. */
        readonly watchlistDeleteSuccess: {
            readonly data?: {
                /** @description Watchlist ID of the deleted watchlist. */
                readonly deleted?: string;
            };
            /**
             * @description Internal use. Always has value 'context'.
             * @enum {string}
             */
            readonly action?: "context";
            /** @description Internal use. Number of times endpoint has been visited during session. */
            readonly MID?: string;
        };
        /** @description Object containing a successful query for watchlists saved for the username in use in the current Web API session. */
        readonly watchlistsResponse: {
            /** @description Contains the watchlist query results. */
            readonly data?: {
                /** @description Indicates if query results contain only market scanners. */
                readonly scanners_only?: boolean;
                /** @description Indicates if market scanners are included in query results. */
                readonly show_scanners?: boolean;
                /** @description Indicates if username's watchlists can be bulk-deleted. */
                readonly bulk_delete?: boolean;
                /** @description Array of objects detailing the watchlists saved for the username in use in the current Web API session. */
                readonly user_lists?: readonly {
                    /** @description Internal use. Indicates if the watchlist is currently in use. */
                    readonly is_open?: boolean;
                    /** @description Indicates if the watchlist can be edited. */
                    readonly read_only?: boolean;
                    /** @description Display name of the watchlist. */
                    readonly name?: string;
                    /**
                     * Format: int32
                     * @description Unix timestamp in milliseconds of the last modification of the watchlist.
                     */
                    readonly modified?: number;
                    /** @description Watchlist ID of the watchlist. */
                    readonly id?: string;
                    /**
                     * @description Always has value 'watchlist'.
                     * @enum {string}
                     */
                    readonly type?: "watchlist";
                }[];
            };
            /**
             * @description Internal use. Always has value 'content'.
             * @enum {string}
             */
            readonly action?: "content";
            /** @description Internal use. Number of times endpoint has been visited during session. */
            readonly MID?: string;
        };
    };
    responses: {
        /** @description bad request */
        readonly BadRequest: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
            };
        };
        /** @description bad request; passed input cannot pass initial validation and detected right away */
        readonly IServerAccountBadRequest: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
            };
        };
        /** @description internal server error, returned when incoming request cannot be processed. It can sometimes include subset of bad requests.  For example, wrong accountId passed and it can only be detected later in handling request. Error contains reason of the problem. */
        readonly InternalServerError: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["errorOnlyResponse"];
            };
        };
        /** @description no content */
        readonly NoContent: {
            headers: {
                readonly [name: string]: unknown;
            };
            content?: never;
        };
        /** @description service is unavailable. For example if request takes more than 10s due to some internal service unavailability,  request aborted and this status returned */
        readonly ServiceUnavailable: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json; charset=utf-8": components["schemas"]["errorResponse"];
            };
        };
        /** @description access denied */
        readonly Unauthorized: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "text/plain; charset=utf-8": string | null;
            };
        };
    };
    parameters: {
        /** @description Specifies the account id to retrieve information */
        readonly AccountIdRequestParam: string;
        /** @description Specifies the authorization header value (e.g., Bearer eyJ0eXAiOiJKV1...). */
        readonly AuthorizationHeaderParam: string;
        /** @description Specifies the tax year to retrieve information */
        readonly TaxYearRequestParam: number;
        /** @description The client's clientId */
        readonly clientIdPathParam: string;
        /** @description The target instruction id. */
        readonly clientInstructionIdPathParam: number;
        /** @description The target instruction id. */
        readonly instructionIdPathParam: number;
        /** @description The target instruction set id. */
        readonly instructionSetIdPathParam: number;
    };
    requestBodies: {
        /** @description Create browser session on behalf of end-user. */
        readonly CreateBrowserSessionRequestBody: {
            readonly content: {
                readonly "application/jwt": components["schemas"]["CreateBrowserSessionRequest"];
            };
        };
        /** @description Create session on behalf of end-user. */
        readonly CreateSessionRequestBody: {
            readonly content: {
                readonly "application/jwt": components["schemas"]["CreateSessionRequest"];
            };
        };
        /** @description Create a Signed JWT echo request. */
        readonly SignedJwtEchoRequestBody: {
            readonly content: {
                readonly "application/jwt": components["schemas"]["SignedJwtEchoRequest"];
            };
        };
    };
    headers: never;
    pathItems: never;
}
export type AchDetails = components['schemas']['ACHDetails'];
export type AusExposureDetailsType = components['schemas']['AUSExposureDetailsType'];
export type AbandonAccount = components['schemas']['AbandonAccount'];
export type Account = components['schemas']['Account'];
export type AccountClose = components['schemas']['AccountClose'];
export type AccountConfiguration = components['schemas']['AccountConfiguration'];
export type AccountConfigurationType = components['schemas']['AccountConfigurationType'];
export type AccountData = components['schemas']['AccountData'];
export type AccountDetailsResponse = components['schemas']['AccountDetailsResponse'];
export type AccountManagementRequests = components['schemas']['AccountManagementRequests'];
export type AccountManagementRequestsPayload = components['schemas']['AccountManagementRequestsPayload'];
export type AccountRep = components['schemas']['AccountRep'];
export type AccountStatusBulkResponse = components['schemas']['AccountStatusBulkResponse'];
export type AccountStatusRequest = components['schemas']['AccountStatusRequest'];
export type AccountStatusResponse = components['schemas']['AccountStatusResponse'];
export type AccountSupportType = components['schemas']['AccountSupportType'];
export type AccreditedInvestor = components['schemas']['AccreditedInvestor'];
export type AccreditedInvestorInformation = components['schemas']['AccreditedInvestorInformation'];
export type AchInstruction = components['schemas']['AchInstruction'];
export type AddAdditionalAccount = components['schemas']['AddAdditionalAccount'];
export type AddClpCapability = components['schemas']['AddCLPCapability'];
export type AddEntity = components['schemas']['AddEntity'];
export type AddLevfxCapability = components['schemas']['AddLEVFXCapability'];
export type AddMiFirData = components['schemas']['AddMiFIRData'];
export type AddNewUser = components['schemas']['AddNewUser'];
export type AddRelationship = components['schemas']['AddRelationship'];
export type AddTradingPermissions = components['schemas']['AddTradingPermissions'];
export type Address = components['schemas']['Address'];
export type AdministratorContactPersonType = components['schemas']['AdministratorContactPersonType'];
export type AdministratorType = components['schemas']['AdministratorType'];
export type AdvisorWrapFeesType = components['schemas']['AdvisorWrapFeesType'];
export type AffiliationDetailsType = components['schemas']['AffiliationDetailsType'];
export type AgreementRevision = components['schemas']['AgreementRevision'];
export type AllocateVan = components['schemas']['AllocateVAN'];
export type AllowedScopeSet = components['schemas']['AllowedScopeSet'];
export type AmRequestStatusResponse = components['schemas']['AmRequestStatusResponse'];
export type AnnualBlendedPercentage = components['schemas']['AnnualBlendedPercentage'];
export type Answer = components['schemas']['Answer'];
export type AnswerDetail = components['schemas']['AnswerDetail'];
export type AnswerResponse = components['schemas']['AnswerResponse'];
export type Application = components['schemas']['Application'];
export type ApplicationPayload = components['schemas']['ApplicationPayload'];
export type ApplyFeeTemplate = components['schemas']['ApplyFeeTemplate'];
export type ArrayNode = components['schemas']['ArrayNode'];
export type AssetExperience = components['schemas']['AssetExperience'];
export type AssociatedEntities = components['schemas']['AssociatedEntities'];
export type AssociatedEntity = components['schemas']['AssociatedEntity'];
export type AssociatedIndividual = components['schemas']['AssociatedIndividual'];
export type AssociatedPerson = components['schemas']['AssociatedPerson'];
export type AssociationTypeEntities = components['schemas']['AssociationTypeEntities'];
export type AsynchronousInstructionResponse = components['schemas']['AsynchronousInstructionResponse'];
export type AsynchronousInstructionSetResponse = components['schemas']['AsynchronousInstructionSetResponse'];
export type AttachedFileType = components['schemas']['AttachedFileType'];
export type Au10TixDetailResponse = components['schemas']['Au10TixDetailResponse'];
export type AuthorizationCode = components['schemas']['AuthorizationCode'];
export type AutomatedWrapFeeDetailsType = components['schemas']['AutomatedWrapFeeDetailsType'];
export type AvailableStatementDatesData = components['schemas']['AvailableStatementDatesData'];
export type AvailableTaxFormsData = components['schemas']['AvailableTaxFormsData'];
export type Base64UrlString = components['schemas']['Base64UrlString'];
export type BulkMultiStatusResponse = components['schemas']['BulkMultiStatusResponse'];
export type BusinessRejectResponse = components['schemas']['BusinessRejectResponse'];
export type CancelInstruction = components['schemas']['CancelInstruction'];
export type ChangeAccountHolderDetail = components['schemas']['ChangeAccountHolderDetail'];
export type ChangeBaseCurrency = components['schemas']['ChangeBaseCurrency'];
export type ChangeFinancialInformation = components['schemas']['ChangeFinancialInformation'];
export type ChangeMarginType = components['schemas']['ChangeMarginType'];
export type CheckDetails = components['schemas']['CheckDetails'];
export type ClientConfiguration = components['schemas']['ClientConfiguration'];
export type ClientPublicKeySet = components['schemas']['ClientPublicKeySet'];
export type CommissionConfig = components['schemas']['CommissionConfig'];
export type CommissionMarkupType = components['schemas']['CommissionMarkupType'];
export type CommissionScheduleType = components['schemas']['CommissionScheduleType'];
export type CompleteLoginMessage = components['schemas']['CompleteLoginMessage'];
export type ComplexAssetTransferInstruction = components['schemas']['ComplexAssetTransferInstruction'];
export type ComplexAssetTransferPollingResult = components['schemas']['ComplexAssetTransferPollingResult'];
export type Consent = components['schemas']['Consent'];
export type ContraBrokerInfo = components['schemas']['ContraBrokerInfo'];
export type CounterpartyPermission = components['schemas']['CounterpartyPermission'];
export type CreateBrowserSessionRequest = components['schemas']['CreateBrowserSessionRequest'];
export type CreateBrowserSessionResponse = components['schemas']['CreateBrowserSessionResponse'];
export type CreateSessionRequest = components['schemas']['CreateSessionRequest'];
export type CreateSessionResponse = components['schemas']['CreateSessionResponse'];
export type CreateUser = components['schemas']['CreateUser'];
export type CustodianType = components['schemas']['CustodianType'];
export type Customer = components['schemas']['Customer'];
export type DvpInstruction = components['schemas']['DVPInstruction'];
export type DayQuantityLimit = components['schemas']['DayQuantityLimit'];
export type DeleteBankInstruction = components['schemas']['DeleteBankInstruction'];
export type DeleteEntity = components['schemas']['DeleteEntity'];
export type DeleteRelationship = components['schemas']['DeleteRelationship'];
export type DepositFundsInstruction = components['schemas']['DepositFundsInstruction'];
export type DepositFundsPollingResponse = components['schemas']['DepositFundsPollingResponse'];
export type DepositFundsPollingResult = components['schemas']['DepositFundsPollingResult'];
export type DepositNotification = components['schemas']['DepositNotification'];
export type Details = components['schemas']['Details'];
export type DisableAccountInBrokerage = components['schemas']['DisableAccountInBrokerage'];
export type Document = components['schemas']['Document'];
export type DocumentSubmission = components['schemas']['DocumentSubmission'];
export type DuplicateAccount = components['schemas']['DuplicateAccount'];
export type DwacInstruction = components['schemas']['DwacInstruction'];
export type EfpQuantityLimits = components['schemas']['EFPQuantityLimits'];
export type EchoResponse = components['schemas']['EchoResponse'];
export type EddaInstruction = components['schemas']['EddaInstruction'];
export type EligibleContractParticipant = components['schemas']['EligibleContractParticipant'];
export type EligibleContractParticipantDetails = components['schemas']['EligibleContractParticipantDetails'];
export type EmploymentDetails = components['schemas']['EmploymentDetails'];
export type EnableAccountInBrokerage = components['schemas']['EnableAccountInBrokerage'];
export type EnrollInDrip = components['schemas']['EnrollInDRIP'];
export type EnrollInSyep = components['schemas']['EnrollInSYEP'];
export type EntityIraBene = components['schemas']['EntityIRABene'];
export type EnumerationResponse = components['schemas']['EnumerationResponse'];
export type EnumerationType = components['schemas']['EnumerationType'];
export type ErrorResponse = components['schemas']['errorResponse'];
export type ExchangeAccess = components['schemas']['ExchangeAccess'];
export type ExtPositionsTransferType = components['schemas']['ExtPositionsTransferType'];
export type ExternalPositionTransfer = components['schemas']['ExternalPositionTransfer'];
export type FileData = components['schemas']['FileData'];
export type FileDetailsResponse = components['schemas']['FileDetailsResponse'];
export type FilePayload = components['schemas']['FilePayload'];
export type FinancialInformation = components['schemas']['FinancialInformation'];
export type FopInstruction = components['schemas']['FopInstruction'];
export type ForbiddenInstructionResponse = components['schemas']['ForbiddenInstructionResponse'];
export type FormCrs = components['schemas']['FormCRS'];
export type FormDetails = components['schemas']['FormDetails'];
export type FormFileResponse = components['schemas']['FormFileResponse'];
export type FormPayload = components['schemas']['FormPayload'];
export type FormW8Ben = components['schemas']['FormW8BEN'];
export type FormW8Bene = components['schemas']['FormW8BENE'];
export type FormW8Imy = components['schemas']['FormW8IMY'];
export type FormW9 = components['schemas']['FormW9'];
export type GetAvailableStmtDatesResponse = components['schemas']['GetAvailableStmtDatesResponse'];
export type GetAvailableTaxFormsResponse = components['schemas']['GetAvailableTaxFormsResponse'];
export type GetAvailableTradeConfirmationDatesResponse = components['schemas']['GetAvailableTradeConfirmationDatesResponse'];
export type GetBrokerListResponse = components['schemas']['GetBrokerListResponse'];
export type GetParticipatingListResponse = components['schemas']['GetParticipatingListResponse'];
export type GetStatementsResponse = components['schemas']['GetStatementsResponse'];
export type HighWaterMarkConfigurationType = components['schemas']['HighWaterMarkConfigurationType'];
export type HighWaterMarkType = components['schemas']['HighWaterMarkType'];
export type IraBeneficiariesType = components['schemas']['IRABeneficiariesType'];
export type IraContingentBeneficiary = components['schemas']['IRAContingentBeneficiary'];
export type IraContingentBeneficiaryEntity = components['schemas']['IRAContingentBeneficiaryEntity'];
export type IraDecedent = components['schemas']['IRADecedent'];
export type IraDepositDetails = components['schemas']['IRADepositDetails'];
export type IraPrimaryBeneficiary = components['schemas']['IRAPrimaryBeneficiary'];
export type IraPrimaryBeneficiaryEntity = components['schemas']['IRAPrimaryBeneficiaryEntity'];
export type Identification = components['schemas']['Identification'];
export type Individual = components['schemas']['Individual'];
export type IndividualApplicant = components['schemas']['IndividualApplicant'];
export type IndividualIraBene = components['schemas']['IndividualIRABene'];
export type IndividualName = components['schemas']['IndividualName'];
export type IndividualTaxInformation = components['schemas']['IndividualTaxInformation'];
export type InformationChange = components['schemas']['InformationChange'];
export type InstructionErrorResult = components['schemas']['InstructionErrorResult'];
export type InstructionPollingResponse = components['schemas']['InstructionPollingResponse'];
export type InstructionResponse = components['schemas']['InstructionResponse'];
export type InstructionResult = components['schemas']['InstructionResult'];
export type InsufficientScopeResponse = components['schemas']['InsufficientScopeResponse'];
export type InterestMarkupType = components['schemas']['InterestMarkupType'];
export type InternalCashTransferInstruction = components['schemas']['InternalCashTransferInstruction'];
export type InternalPositionTransferInstruction = components['schemas']['InternalPositionTransferInstruction'];
export type InternalServerErrorResponse = components['schemas']['InternalServerErrorResponse'];
export type InvalidAccessTokenResponse = components['schemas']['InvalidAccessTokenResponse'];
export type InvalidArgument = components['schemas']['InvalidArgument'];
export type JointApplicant = components['schemas']['JointApplicant'];
export type JoseHeader = components['schemas']['JoseHeader'];
export type JwsPayload = components['schemas']['JwsPayload'];
export type LeaveDrip = components['schemas']['LeaveDRIP'];
export type LeaveSyep = components['schemas']['LeaveSYEP'];
export type LegalEntity = components['schemas']['LegalEntity'];
export type LegalEntityIdentification = components['schemas']['LegalEntityIdentification'];
export type LinkDuplicateAccount = components['schemas']['LinkDuplicateAccount'];
export type LocalTaxForm = components['schemas']['LocalTaxForm'];
export type LoginMessage = components['schemas']['LoginMessage'];
export type LoginMessageRequest = components['schemas']['LoginMessageRequest'];
export type LoginMessageResponse = components['schemas']['LoginMessageResponse'];
export type ManageMarketDataSubscriptions = components['schemas']['ManageMarketDataSubscriptions'];
export type ManagingOwner = components['schemas']['ManagingOwner'];
export type MarkupStaircaseType = components['schemas']['MarkupStaircaseType'];
export type MissingRequiredParameterResponse = components['schemas']['MissingRequiredParameterResponse'];
export type NavRangeType = components['schemas']['NAVRangeType'];
export type NoSuchInstructionResponse = components['schemas']['NoSuchInstructionResponse'];
export type NoSuchInstructionSetResponse = components['schemas']['NoSuchInstructionSetResponse'];
export type NonDisclosedDetail = components['schemas']['NonDisclosedDetail'];
export type OrgRegulatorType = components['schemas']['ORGRegulatorType'];
export type OrgRegulatoryInfoType = components['schemas']['ORGRegulatoryInfoType'];
export type OrderQuantityLimit = components['schemas']['OrderQuantityLimit'];
export type OrderValueLimits = components['schemas']['OrderValueLimits'];
export type Organization = components['schemas']['Organization'];
export type OrganizationApplicant = components['schemas']['OrganizationApplicant'];
export type OrganizationIdentification = components['schemas']['OrganizationIdentification'];
export type PartialBondPosition = components['schemas']['PartialBondPosition'];
export type PartialCashPosition = components['schemas']['PartialCashPosition'];
export type PartialFundPosition = components['schemas']['PartialFundPosition'];
export type PartialOptionPosition = components['schemas']['PartialOptionPosition'];
export type PartialStockPosition = components['schemas']['PartialStockPosition'];
export type PartialWarrantPosition = components['schemas']['PartialWarrantPosition'];
export type PendingTask = components['schemas']['PendingTask'];
export type PendingTasksResponse = components['schemas']['PendingTasksResponse'];
export type PhoneInfo = components['schemas']['PhoneInfo'];
export type PoliticalMilitaryDiplomaticDetailsType = components['schemas']['PoliticalMilitaryDiplomaticDetailsType'];
export type PollingInstructionResult = components['schemas']['PollingInstructionResult'];
export type PredefinedDestinationInstruction = components['schemas']['PredefinedDestinationInstruction'];
export type PreviousLossesType = components['schemas']['PreviousLossesType'];
export type PrimaryContributorType = components['schemas']['PrimaryContributorType'];
export type ProblemDetailResponse = components['schemas']['ProblemDetailResponse'];
export type ProcessDocuments = components['schemas']['ProcessDocuments'];
export type ProcessDocumentsPayload = components['schemas']['ProcessDocumentsPayload'];
export type ProhibitedCountryQuestionnaire = components['schemas']['ProhibitedCountryQuestionnaire'];
export type ProhibitedCountryQuestionnaireList = components['schemas']['ProhibitedCountryQuestionnaireList'];
export type ProhibitedQuestionnaireDetail = components['schemas']['ProhibitedQuestionnaireDetail'];
export type PublicCompanyInfoType = components['schemas']['PublicCompanyInfoType'];
export type QualifiedPurchaser = components['schemas']['QualifiedPurchaser'];
export type QualifiedPurchaserDetails = components['schemas']['QualifiedPurchaserDetails'];
export type QueryAccountBalancesResult = components['schemas']['QueryAccountBalancesResult'];
export type QueryBankInstruction = components['schemas']['QueryBankInstruction'];
export type QueryBankInstructionResponse = components['schemas']['QueryBankInstructionResponse'];
export type QueryBankInstructionResult = components['schemas']['QueryBankInstructionResult'];
export type QueryIraContributions = components['schemas']['QueryIRAContributions'];
export type QueryIraContributionsResponse = components['schemas']['QueryIRAContributionsResponse'];
export type QueryIraContributionsResult = components['schemas']['QueryIRAContributionsResult'];
export type QueryRecentInstructionResponse = components['schemas']['QueryRecentInstructionResponse'];
export type QueryRecentInstructionResult = components['schemas']['QueryRecentInstructionResult'];
export type QueryRecentInstructions = components['schemas']['QueryRecentInstructions'];
export type QueryRecentRecurringEventResponse = components['schemas']['QueryRecentRecurringEventResponse'];
export type QueryRecentRecurringEventResult = components['schemas']['QueryRecentRecurringEventResult'];
export type QueryRecentRecurringEvents = components['schemas']['QueryRecentRecurringEvents'];
export type QueryRecurringInstructions = components['schemas']['QueryRecurringInstructions'];
export type QueryRecurringInstructionsResponse = components['schemas']['QueryRecurringInstructionsResponse'];
export type QueryRecurringInstructionsResult = components['schemas']['QueryRecurringInstructionsResult'];
export type QueryWithdrawableAmountsInstructionResult = components['schemas']['QueryWithdrawableAmountsInstructionResult'];
export type QueryWithdrawableAmountsResponse = components['schemas']['QueryWithdrawableAmountsResponse'];
export type QueryWithdrawableAmountsWithoutOriginHoldResponse = components['schemas']['QueryWithdrawableAmountsWithoutOriginHoldResponse'];
export type QueryWithdrawableAmountsWithoutOriginHoldResult = components['schemas']['QueryWithdrawableAmountsWithoutOriginHoldResult'];
export type QueryWithdrawableCashEquityResult = components['schemas']['QueryWithdrawableCashEquityResult'];
export type QueryWithdrawableFunds = components['schemas']['QueryWithdrawableFunds'];
export type Questionnaire = components['schemas']['Questionnaire'];
export type QuestionnaireResponse = components['schemas']['QuestionnaireResponse'];
export type QuestionnaireType = components['schemas']['QuestionnaireType'];
export type Questionnaires = components['schemas']['Questionnaires'];
export type QuizQuestionnaires = components['schemas']['QuizQuestionnaires'];
export type RecurringInstructionDetail = components['schemas']['RecurringInstructionDetail'];
export type RegisteredClient = components['schemas']['RegisteredClient'];
export type RegisteredScope = components['schemas']['RegisteredScope'];
export type RegisteredScopeSet = components['schemas']['RegisteredScopeSet'];
export type RegistrationTask = components['schemas']['RegistrationTask'];
export type RegistrationTasksResponse = components['schemas']['RegistrationTasksResponse'];
export type RegulatedMembership = components['schemas']['RegulatedMembership'];
export type RegulatoryDetail = components['schemas']['RegulatoryDetail'];
export type RegulatoryInformation = components['schemas']['RegulatoryInformation'];
export type RemoveTradingPermissions = components['schemas']['RemoveTradingPermissions'];
export type ReopenAccount = components['schemas']['ReopenAccount'];
export type RepDetail = components['schemas']['RepDetail'];
export type RepresentativeDetail = components['schemas']['RepresentativeDetail'];
export type RequestDetail = components['schemas']['RequestDetail'];
export type RequestDetailsRequest = components['schemas']['RequestDetailsRequest'];
export type RequestDetailsResponse = components['schemas']['RequestDetailsResponse'];
export type RequestInfoResponse = components['schemas']['RequestInfoResponse'];
export type ResetAbandonedAccount = components['schemas']['ResetAbandonedAccount'];
export type ResidenceAddress = components['schemas']['ResidenceAddress'];
export type ResponseFileResponse = components['schemas']['ResponseFileResponse'];
export type RestrictionInfo = components['schemas']['RestrictionInfo'];
export type SoiQuestionnaire = components['schemas']['SOIQuestionnaire'];
export type SecurityQuestions = components['schemas']['SecurityQuestions'];
export type SelfRegulatedMembershipType = components['schemas']['SelfRegulatedMembershipType'];
export type ServerPublicKey = components['schemas']['ServerPublicKey'];
export type Service = components['schemas']['Service'];
export type SignedJwtEchoRequest = components['schemas']['SignedJwtEchoRequest'];
export type SourceOfIncomeType = components['schemas']['SourceOfIncomeType'];
export type SourceOfWealthType = components['schemas']['SourceOfWealthType'];
export type StatusResponse = components['schemas']['StatusResponse'];
export type StmtRequest = components['schemas']['StmtRequest'];
export type SynchronousInstructionResponse = components['schemas']['SynchronousInstructionResponse'];
export type Task = components['schemas']['Task'];
export type TaxFormRequest = components['schemas']['TaxFormRequest'];
export type TaxFormResponse = components['schemas']['TaxFormResponse'];
export type TaxFormType = components['schemas']['TaxFormType'];
export type TaxPayerDetails = components['schemas']['TaxPayerDetails'];
export type TaxResidency = components['schemas']['TaxResidency'];
export type Title = components['schemas']['Title'];
export type TokenRequest = components['schemas']['TokenRequest'];
export type TokenResponse = components['schemas']['TokenResponse'];
export type TradeConfirmationRequest = components['schemas']['TradeConfirmationRequest'];
export type TradeConfirmationResponse = components['schemas']['TradeConfirmationResponse'];
export type TradingInstrument = components['schemas']['TradingInstrument'];
export type TradingLimits = components['schemas']['TradingLimits'];
export type TradingPermission = components['schemas']['TradingPermission'];
export type TraditionalBankInstructionVerification = components['schemas']['TraditionalBankInstructionVerification'];
export type Trust = components['schemas']['Trust'];
export type TrustApplicant = components['schemas']['TrustApplicant'];
export type TrustIdentification = components['schemas']['TrustIdentification'];
export type TrusteeEntityType = components['schemas']['TrusteeEntityType'];
export type TrusteeIndividual = components['schemas']['TrusteeIndividual'];
export type TrusteesType = components['schemas']['TrusteesType'];
export type UnauthorizedAccessResponse = components['schemas']['UnauthorizedAccessResponse'];
export type UpdateAccountAlias = components['schemas']['UpdateAccountAlias'];
export type UpdateAccountRepresentatives = components['schemas']['UpdateAccountRepresentatives'];
export type UpdateBcan = components['schemas']['UpdateBCAN'];
export type UpdateCredentials = components['schemas']['UpdateCredentials'];
export type UpdateEmail = components['schemas']['UpdateEmail'];
export type UpdateEntity = components['schemas']['UpdateEntity'];
export type UpdateExternalId = components['schemas']['UpdateExternalId'];
export type UpdatePassword = components['schemas']['UpdatePassword'];
export type UpdatePropertyProfile = components['schemas']['UpdatePropertyProfile'];
export type UpdateTaxForm = components['schemas']['UpdateTaxForm'];
export type UpdateUserAccessRights = components['schemas']['UpdateUserAccessRights'];
export type UpdateW8Ben = components['schemas']['UpdateW8BEN'];
export type UpdateWithholdingStatement = components['schemas']['UpdateWithholdingStatement'];
export type User = components['schemas']['user'];
export type UserDetails = components['schemas']['UserDetails'];
export type UserNameAvailableResponse = components['schemas']['UserNameAvailableResponse'];
export type UserPrivilege = components['schemas']['UserPrivilege'];
export type VirtualAccountConfiguration = components['schemas']['VirtualAccountConfiguration'];
export type VirtualAccountIdMapping = components['schemas']['VirtualAccountIdMapping'];
export type WireDetails = components['schemas']['WireDetails'];
export type WithdrawFundsInstruction = components['schemas']['WithdrawFundsInstruction'];
export type WithholdingStatementType = components['schemas']['WithholdingStatementType'];
export type AccountAttributes = components['schemas']['accountAttributes'];
export type AccountSummaryResponse = components['schemas']['accountSummaryResponse'];
export type AdvancedOrderReject = components['schemas']['advancedOrderReject'];
export type Alert = components['schemas']['alert'];
export type AlertActivationRequest = components['schemas']['alertActivationRequest'];
export type AlertActivationResponse = components['schemas']['alertActivationResponse'];
export type AlertCondition = components['schemas']['alertCondition'];
export type AlertCreationRequest = components['schemas']['alertCreationRequest'];
export type AlertCreationResponse = components['schemas']['alertCreationResponse'];
export type AlertDeletionResponse = components['schemas']['alertDeletionResponse'];
export type AlertDetails = components['schemas']['alertDetails'];
export type Alerts = components['schemas']['alerts'];
export type AlgosResponse = components['schemas']['algosResponse'];
export type AllocationGroup = components['schemas']['allocationGroup'];
export type AllocationGroups = components['schemas']['allocationGroups'];
export type AllocationMethod = components['schemas']['allocationMethod'];
export type AvailableFundsResponse = components['schemas']['availableFundsResponse'];
export type BondFiltersResponse = components['schemas']['bondFiltersResponse'];
export type BrokerageSessionInitRequest = components['schemas']['brokerageSessionInitRequest'];
export type BrokerageSessionStatus = components['schemas']['brokerageSessionStatus'];
export type CategoryTreeResponse = components['schemas']['categoryTreeResponse'];
export type ContractInfo = components['schemas']['contractInfo'];
export type ContractRules = components['schemas']['contractRules'];
export type CurrencyPairs = components['schemas']['currencyPairs'];
export type DeliveryOptions = components['schemas']['deliveryOptions'];
export type DetailedContractInformation = components['schemas']['detailedContractInformation'];
export type DisclaimerInfo = components['schemas']['disclaimerInfo'];
export type DynAccountSearchResponse = components['schemas']['dynAccountSearchResponse'];
export type ErrorOnlyResponse = components['schemas']['errorOnlyResponse'];
export type FailedTickleResponse = components['schemas']['failedTickleResponse'];
export type Features = components['schemas']['features'];
export type ForecastDetailsResponse = components['schemas']['forecastDetailsResponse'];
export type ForecastMarketResponse = components['schemas']['forecastMarketResponse'];
export type ForecastRulesResponse = components['schemas']['forecastRulesResponse'];
export type ForecastSchedulesResponse = components['schemas']['forecastSchedulesResponse'];
export type Funds = components['schemas']['funds'];
export type FyiEnableDeviceOption = components['schemas']['fyiEnableDeviceOption'];
export type FyiSettings = components['schemas']['fyiSettings'];
export type FyiVt = components['schemas']['fyiVT'];
export type IndividualPosition = components['schemas']['individualPosition'];
export type IndividualPositionArray = components['schemas']['individualPositionArray'];
export type IserverHistoryBidAskResponse = components['schemas']['iserverHistoryBidAskResponse'];
export type IserverHistoryLastResponse = components['schemas']['iserverHistoryLastResponse'];
export type IserverHistoryMidpointResponse = components['schemas']['iserverHistoryMidpointResponse'];
export type IserverScannerParams = components['schemas']['iserverScannerParams'];
export type IserverScannerRunRequest = components['schemas']['iserverScannerRunRequest'];
export type IserverScannerRunResponse = components['schemas']['iserverScannerRunResponse'];
export type IserverSnapshot = components['schemas']['iserverSnapshot'];
export type Ledger = components['schemas']['ledger'];
export type LiveOrdersResponse = components['schemas']['liveOrdersResponse'];
export type MdFields = components['schemas']['mdFields'];
export type NotificationReadAcknowledge = components['schemas']['notificationReadAcknowledge'];
export type Notifications = components['schemas']['notifications'];
export type OrderCancelSuccess = components['schemas']['orderCancelSuccess'];
export type OrderPreview = components['schemas']['orderPreview'];
export type OrderReplyMessage = components['schemas']['orderReplyMessage'];
export type OrderStatus = components['schemas']['orderStatus'];
export type OrderSubmitError = components['schemas']['orderSubmitError'];
export type OrderSubmitSuccess = components['schemas']['orderSubmitSuccess'];
export type OrdersSubmissionRequest = components['schemas']['ordersSubmissionRequest'];
export type PerformanceResponse = components['schemas']['performanceResponse'];
export type PnlPartitionedResponse = components['schemas']['pnlPartitionedResponse'];
export type PortfolioAllocations = components['schemas']['portfolioAllocations'];
export type PortfolioSummary = components['schemas']['portfolioSummary'];
export type PortfolioSummaryValue = components['schemas']['portfolioSummaryValue'];
export type Presets = components['schemas']['presets'];
export type ScheduleResponse = components['schemas']['scheduleResponse'];
export type SecDefInfoResponse = components['schemas']['secDefInfoResponse'];
export type SecdefSearchResponse = components['schemas']['secdefSearchResponse'];
export type SetAccountResponse = components['schemas']['setAccountResponse'];
export type SignatureAndOwners = components['schemas']['signatureAndOwners'];
export type SingleHistoricalBar = components['schemas']['singleHistoricalBar'];
export type SingleHistoricalBarBidAsk = components['schemas']['singleHistoricalBarBidAsk'];
export type SingleHistoricalBarLast = components['schemas']['singleHistoricalBarLast'];
export type SingleHistoricalBarMidpoint = components['schemas']['singleHistoricalBarMidpoint'];
export type SingleOrderSubmissionRequest = components['schemas']['singleOrderSubmissionRequest'];
export type SingleWatchlist = components['schemas']['singleWatchlist'];
export type SingleWatchlistEntry = components['schemas']['singleWatchlistEntry'];
export type SsoValidateResponse = components['schemas']['ssoValidateResponse'];
export type Stocks = components['schemas']['stocks'];
export type SubAccounts = components['schemas']['subAccounts'];
export type SuccessfulTickleResponse = components['schemas']['successfulTickleResponse'];
export type SummaryMarketValueResponse = components['schemas']['summaryMarketValueResponse'];
export type SummaryOfAccountBalancesResponse = components['schemas']['summaryOfAccountBalancesResponse'];
export type SummaryOfAccountMarginResponse = components['schemas']['summaryOfAccountMarginResponse'];
export type TickleResponse = components['schemas']['tickleResponse'];
export type TradesResponse = components['schemas']['tradesResponse'];
export type TradingSchedule = components['schemas']['tradingSchedule'];
export type TransactionsResponse = components['schemas']['transactionsResponse'];
export type TrsrvSecDefResponse = components['schemas']['trsrvSecDefResponse'];
export type Typecodes = components['schemas']['typecodes'];
export type UserAccountsResponse = components['schemas']['userAccountsResponse'];
export type UtcDateTime = components['schemas']['utcDateTime'];
export type WatchlistDeleteSuccess = components['schemas']['watchlistDeleteSuccess'];
export type WatchlistsResponse = components['schemas']['watchlistsResponse'];
export type ResponseBadRequest = components['responses']['BadRequest'];
export type ResponseIServerAccountBadRequest = components['responses']['IServerAccountBadRequest'];
export type ResponseInternalServerError = components['responses']['InternalServerError'];
export type ResponseNoContent = components['responses']['NoContent'];
export type ResponseServiceUnavailable = components['responses']['ServiceUnavailable'];
export type ResponseUnauthorized = components['responses']['Unauthorized'];
export type ParameterAccountIdRequestParam = components['parameters']['AccountIdRequestParam'];
export type ParameterAuthorizationHeaderParam = components['parameters']['AuthorizationHeaderParam'];
export type ParameterTaxYearRequestParam = components['parameters']['TaxYearRequestParam'];
export type ParameterClientIdPathParam = components['parameters']['clientIdPathParam'];
export type ParameterClientInstructionIdPathParam = components['parameters']['clientInstructionIdPathParam'];
export type ParameterInstructionIdPathParam = components['parameters']['instructionIdPathParam'];
export type ParameterInstructionSetIdPathParam = components['parameters']['instructionSetIdPathParam'];
export type RequestBodyCreateBrowserSessionRequestBody = components['requestBodies']['CreateBrowserSessionRequestBody'];
export type RequestBodyCreateSessionRequestBody = components['requestBodies']['CreateSessionRequestBody'];
export type RequestBodySignedJwtEchoRequestBody = components['requestBodies']['SignedJwtEchoRequestBody'];
export type $defs = Record<string, never>;
export interface operations {
    readonly getScannerParameters: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description An array of objects detailing contract information. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["iserverScannerParams"];
                };
            };
            readonly 401: components["responses"]["Unauthorized"];
            readonly 500: components["responses"]["InternalServerError"];
            readonly 503: components["responses"]["ServiceUnavailable"];
        };
    };
    readonly getScannerResults: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                /**
                 * @example {
                 *       "instrument": "STK",
                 *       "location": "STK.US.MAJOR",
                 *       "type": "TOP_TRADE_COUNT",
                 *       "filter": [
                 *         {
                 *           "code": "priceAbove",
                 *           "value": 5
                 *         }
                 *       ]
                 *     }
                 */
                readonly "application/json": components["schemas"]["iserverScannerRunRequest"];
            };
        };
        readonly responses: {
            /** @description An array of objects detailing contract information. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["iserverScannerRunResponse"];
                };
            };
            readonly 400: components["responses"]["BadRequest"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 500: components["responses"]["InternalServerError"];
            readonly 503: components["responses"]["ServiceUnavailable"];
        };
    };
    readonly generateToken: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/x-www-form-urlencoded": components["schemas"]["TokenRequest"];
            };
        };
        readonly responses: {
            /** @description Returns a token response. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Returns a [Problem detail](https://datatracker.ietf.org/doc/html/rfc9457) instance representing a bad request. */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                };
            };
            /** @description Returns a [Problem detail](https://datatracker.ietf.org/doc/html/rfc9457) instance representing an internal server error. */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/problem+json": components["schemas"]["ProblemDetailResponse"];
                };
            };
        };
    };
}
