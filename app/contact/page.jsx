"use client";

import React from "react";
import { TextField, Container, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./page.module.css"

// TextFieldのカスタマイズ
const CustomTextField = styled(TextField)({
  "& label": {
    color: "#333", // ラベルの色
  },
  "& label.Mui-focused": {
    color: "#333", // フォーカス時のラベルの色
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#333", // ボーダーの色
    },
    "&:hover fieldset": {
      borderColor: "#333", // ホバー時のボーダーの色
    },
    "&.Mui-focused fieldset": {
      borderColor: "#333", // フォーカス時のボーダーの色
    },
    "& input": {
      color: "#333", // 入力文字の色
    },
    "& input::placeholder": {
      color: "#333", // プレースホルダーの色（必要に応じて）
    },
    "&.Mui-focused input": {
      backgroundColor: "transparent", // フォーカス時の背景色を透明に
    },
    "& .MuiOutlinedInput-input": {
      color: "#333", // 入力文字の色を白に
    },
    // サジェスト選択時の背景色の調整
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      "& .MuiAutocomplete-input": {
        backgroundColor: "transparent", // サジェスト選択時の背景色を透明に
        color: "#333", // 入力文字の色
      },
    },
  },
});

const validationSchema = Yup.object({
  name: Yup.string().required("名前は必須です"),
  email: Yup.string()
    .email("無効なメールアドレスです")
    .required("メールアドレスは必須です"),
  userId: Yup.string()
    .matches(/^[a-zA-Z0-9]{8}$/, "ユーザーIDは半角英数字8桁です")
    .required("ユーザーIDは必須です"),
  inquiry: Yup.string().required("お問合せ内容は必須です"),
});

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userId: "",
      inquiry: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container className="container" maxWidth="sm" style={{ color: "#333" }}>
      <Box sx={{ mt: 9, mb: 2, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          お問合せフォーム
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <CustomTextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="名前"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <CustomTextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="メールアドレス"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <CustomTextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="ユーザーID"
          name="userId"
          value={formik.values.userId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userId && Boolean(formik.errors.userId)}
          helperText={formik.touched.userId && formik.errors.userId}
        />
        <CustomTextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="お問合せ内容"
          name="inquiry"
          multiline
          rows={4}
          value={formik.values.inquiry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.inquiry && Boolean(formik.errors.inquiry)}
          helperText={formik.touched.inquiry && formik.errors.inquiry}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          送信
        </Button>
      </form>
    </Container>
  );
}

export default ContactForm;
