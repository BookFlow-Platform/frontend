const ProfileIcon = ({ dark }: { dark: boolean })=> {
    return (
        (dark ? 
            <svg width="20" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9488 10.5532C7.49884 10.5532 4.58789 11.117 4.58789 13.2927C4.58789 15.4694 7.51765 16.0133 10.9488 16.0133C14.3988 16.0133 17.3098 15.4495 17.3098 13.2738C17.3098 11.0972 14.38 10.5532 10.9488 10.5532Z" fill="#8A92A6"/>
            <path opacity="0.4" d="M10.949 8.48021C13.2851 8.48021 15.1583 6.59625 15.1583 4.2467C15.1583 1.89625 13.2851 0.0131836 10.949 0.0131836C8.61293 0.0131836 6.73975 1.89625 6.73975 4.2467C6.73975 6.59625 8.61293 8.48021 10.949 8.48021Z" fill="#8A92A6"/>
            <path opacity="0.4" d="M20.0881 5.23241C20.6925 2.85495 18.9205 0.719727 16.664 0.719727C16.4187 0.719727 16.1841 0.746743 15.9549 0.792672C15.9244 0.799876 15.8904 0.815186 15.8725 0.842202C15.8519 0.876423 15.8671 0.922352 15.8895 0.95207C16.5673 1.90846 16.9568 3.07288 16.9568 4.32285C16.9568 5.52059 16.5996 6.63728 15.9728 7.56395C15.9083 7.65941 15.9656 7.78819 16.0793 7.808C16.2369 7.83592 16.3981 7.85033 16.5629 7.85483C18.2059 7.89806 19.6807 6.8345 20.0881 5.23241Z" fill="#8A92A6"/>
            <path d="M21.8094 10.8301C21.5086 10.1853 20.7824 9.74317 19.6783 9.52614C19.1572 9.39826 17.747 9.21815 16.4352 9.24246C16.4155 9.24516 16.4048 9.25867 16.403 9.26768C16.4003 9.28028 16.4057 9.3019 16.4316 9.31541C17.0378 9.61709 19.3811 10.9292 19.0865 13.6966C19.074 13.8164 19.1698 13.9199 19.2888 13.9019C19.8655 13.8191 21.3492 13.4985 21.8094 12.4998C22.0637 11.972 22.0637 11.3588 21.8094 10.8301Z" fill="#8A92A6"/>
            <path opacity="0.4" d="M6.04459 0.792916C5.81626 0.746087 5.58077 0.719971 5.33543 0.719971C3.07901 0.719971 1.30701 2.85519 1.9123 5.23266C2.31882 6.83475 3.79355 7.8983 5.43661 7.85508C5.60136 7.85057 5.76343 7.83526 5.92013 7.80825C6.03384 7.78844 6.09115 7.65966 6.02668 7.5642C5.3999 6.63662 5.04263 5.52083 5.04263 4.3231C5.04263 3.07222 5.43303 1.9078 6.11085 0.952314C6.13234 0.922596 6.14845 0.876667 6.12696 0.842446C6.10906 0.814529 6.07593 0.80012 6.04459 0.792916Z" fill="#8A92A6"/>
            <path d="M2.32156 9.52588C1.21752 9.74292 0.492248 10.1851 0.191392 10.8299C-0.0637974 11.3585 -0.0637974 11.9718 0.191392 12.5004C0.651629 13.4982 2.13531 13.8197 2.71195 13.9017C2.83104 13.9197 2.92595 13.817 2.91342 13.6964C2.61883 10.9298 4.9621 9.61774 5.56918 9.31605C5.59425 9.30164 5.59962 9.28093 5.59694 9.26742C5.59515 9.25842 5.5853 9.24491 5.5656 9.24311C4.25294 9.21789 2.84358 9.398 2.32156 9.52588Z" fill="#8A92A6"/>
            </svg>

        :
        <svg width="20" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9488 10.5532C7.49884 10.5532 4.58789 11.117 4.58789 13.2927C4.58789 15.4694 7.51765 16.0133 10.9488 16.0133C14.3988 16.0133 17.3098 15.4495 17.3098 13.2738C17.3098 11.0972 14.38 10.5532 10.9488 10.5532Z" fill="#FFFFFF"/>
        <path opacity="0.4" d="M10.949 8.48021C13.2851 8.48021 15.1583 6.59625 15.1583 4.2467C15.1583 1.89625 13.2851 0.0131836 10.949 0.0131836C8.61293 0.0131836 6.73975 1.89625 6.73975 4.2467C6.73975 6.59625 8.61293 8.48021 10.949 8.48021Z" fill="#FFFFFF"/>
        <path opacity="0.4" d="M20.0881 5.23241C20.6925 2.85495 18.9205 0.719727 16.664 0.719727C16.4187 0.719727 16.1841 0.746743 15.9549 0.792672C15.9244 0.799876 15.8904 0.815186 15.8725 0.842202C15.8519 0.876423 15.8671 0.922352 15.8895 0.95207C16.5673 1.90846 16.9568 3.07288 16.9568 4.32285C16.9568 5.52059 16.5996 6.63728 15.9728 7.56395C15.9083 7.65941 15.9656 7.78819 16.0793 7.808C16.2369 7.83592 16.3981 7.85033 16.5629 7.85483C18.2059 7.89806 19.6807 6.8345 20.0881 5.23241Z" fill="#FFFFFF"/>
        <path d="M21.8094 10.8301C21.5086 10.1853 20.7824 9.74317 19.6783 9.52614C19.1572 9.39826 17.747 9.21815 16.4352 9.24246C16.4155 9.24516 16.4048 9.25867 16.403 9.26768C16.4003 9.28028 16.4057 9.3019 16.4316 9.31541C17.0378 9.61709 19.3811 10.9292 19.0865 13.6966C19.074 13.8164 19.1698 13.9199 19.2888 13.9019C19.8655 13.8191 21.3492 13.4985 21.8094 12.4998C22.0637 11.972 22.0637 11.3588 21.8094 10.8301Z" fill="#FFFFFF"/>
        <path opacity="0.4" d="M6.04459 0.792916C5.81626 0.746087 5.58077 0.719971 5.33543 0.719971C3.07901 0.719971 1.30701 2.85519 1.9123 5.23266C2.31882 6.83475 3.79355 7.8983 5.43661 7.85508C5.60136 7.85057 5.76343 7.83526 5.92013 7.80825C6.03384 7.78844 6.09115 7.65966 6.02668 7.5642C5.3999 6.63662 5.04263 5.52083 5.04263 4.3231C5.04263 3.07222 5.43303 1.9078 6.11085 0.952314C6.13234 0.922596 6.14845 0.876667 6.12696 0.842446C6.10906 0.814529 6.07593 0.80012 6.04459 0.792916Z" fill="#FFFFFF"/>
        <path d="M2.32156 9.52588C1.21752 9.74292 0.492248 10.1851 0.191392 10.8299C-0.0637974 11.3585 -0.0637974 11.9718 0.191392 12.5004C0.651629 13.4982 2.13531 13.8197 2.71195 13.9017C2.83104 13.9197 2.92595 13.817 2.91342 13.6964C2.61883 10.9298 4.9621 9.61774 5.56918 9.31605C5.59425 9.30164 5.59962 9.28093 5.59694 9.26742C5.59515 9.25842 5.5853 9.24491 5.5656 9.24311C4.25294 9.21789 2.84358 9.398 2.32156 9.52588Z" fill="#FFFFFF"/>
        </svg>
        
        )
        
    )
}
    
export default ProfileIcon
//"#8A92A6"
