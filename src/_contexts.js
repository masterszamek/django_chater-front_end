import React from 'react';
import Authentication from "_services/auth_service.js";

export const UserContext = React.createContext(Authentication.get_user())