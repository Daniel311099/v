import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";

const ProfileSection: React.FC<{ session: any }> = ({ session }) => {
    const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);

    const handleChangePassword = () => {
        setIsEditingPassword(true);
    };

    const handleSavePassword = () => {
        // Handle password save logic here
        setIsEditingPassword(false);
    };

    return (
        <div className="profile-section">
            <h2>Profile</h2>
            {session && (
                <div className="account-details">
                    <p>
                        Logged in as <strong>{session.user?.name}</strong>
                    </p>
                    <p>Email: {session.user?.email}</p>
                </div>
            )}
            {isEditingPassword ? (
                <div className="change-password-section">
                    <h3>Change Password</h3>
                    <input type="password" placeholder="New Password" />
                    <button onClick={handleSavePassword}>Save</button>
                </div>
            ) : (
                <button onClick={handleChangePassword} className="action-button">Change Password</button>
            )}
        </div>
    );
};

export default ProfileSection;
