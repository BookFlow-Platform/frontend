import React, { FC } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MyBooksPage from "../pages/MyBooksPage/MyBooksPage";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import AddBookPopup from "../AddBookPopup/AddBookPopup";

import DeletePopup from "../DeletePopup/DeletePopup";
import ComplaintPopup from "../ComplaintPopup/ComplaintPopup";

import ComplaintPage from "../pages/ComplaintPage/ComplaintPage";

import "./App.scss";

const App: FC = (): React.ReactElement => {
  const [isAddBookPopupOpen, setAddBookPopup] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopup] = React.useState(false);
  const [isComplaintPopupOpen, setComplaintPopup] = React.useState(false);

  function closeAllPopups() {
    setAddBookPopup(false);
    setDeletePopup(false);
    setComplaintPopup(false);
  }

  function handleAddPlaceClick() {
    setAddBookPopup(true);
  }

  function handleDeletePopupClick() {
    setDeletePopup(true);
  }

  function handleComplaintPopupClick() {
    setComplaintPopup(true);
  }

  return (
    <Theme preset={presetGpnDefault}>
      <>
        <Routes>
          <Route
            path="/"
            element={<MainLayout onClick={handleAddPlaceClick} />}
          >
            <Route index element={<MainPage />} />
            <Route path="mybooks" element={<MyBooksPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="myprofile"
              element={
                <Profile
                  setDelete={handleDeletePopupClick}
                  addComplaint={handleComplaintPopupClick}
                />
              }
            />

          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <AddBookPopup isOpen={isAddBookPopupOpen} onClose={closeAllPopups} />
        <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} />
        <ComplaintPopup
          isOpen={isComplaintPopupOpen}
          onClose={closeAllPopups}
        />
      </>
    </Theme>
  );
};

export default App;
