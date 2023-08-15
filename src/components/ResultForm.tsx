'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Modal,
  Fade,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import styles from '../styles/image.module.css';
import { Form, FormikProvider, useFormik } from 'formik';
import { useGetRequest } from '@/hooks/useApi';
import axios from 'axios';
import LotteryResult from './LotteryResult';
import CloseIcon from '@mui/icons-material/Close';

const defaultTheme = createTheme();

export default function ResultForm() {
  const [category, setCategory] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isResultVisible, setIsResultVisible] = React.useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const [lotteryData, setLotteryData] = React.useState<any>(null);
  const [token, setToken] = React.useState<any>('');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage?.getItem('token');
      setToken(token);
    }
  }, []);
  const lotteryNumber = [
    { id: 1, name: 'num1' },
    { id: 2, name: 'num2' },
    { id: 3, name: 'num3' },
    { id: 4, name: 'num4' },
    { id: 5, name: 'num5' },
    { id: 6, name: 'num6' },
  ];

  const formik = useFormik({
    initialValues: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      num5: '',
      num6: '',
      category: 'MegaMillion',
    },
    onSubmit: async (values: any) => {
      console.log(values);
      setIsLoading(true);

      try {
        if (values.category === 'PowerBall') {
          const apiUrl = `https://helpful-shorts-pig.cyclic.app/api/lottery/powerball?userNumber=${values.num1},${values.num2},${values.num3},${values.num4},${values.num5},${values.num6}`;
          const response = await axios.post(apiUrl, null, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setLotteryData(response.data);
          setIsResultVisible(true);
        } else if (values.category === 'MegaMillion') {
          const apiUrl = `https://helpful-shorts-pig.cyclic.app/api/lottery/megamillion?userNumber=${values.num1},${values.num2},${values.num3},${values.num4},${values.num5},${values.num6}`;
          const response = await axios.post(apiUrl, null, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setLotteryData(response.data);
          setIsResultVisible(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
  });
  const { getFieldProps, handleSubmit, values } = formik;
  const inputRefs = Array.from({ length: 6 }, () =>
    React.createRef<HTMLInputElement>()
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    formik.setFieldValue(`num${index + 1}`, value);

    if (value.length === 2 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const closeModal = () => {
    setIsResultVisible(false);
    setLotteryData(null);
    formik.resetForm();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <CssBaseline />
          <Stack>
            <Stack
              sx={{
                mt: 1,
                gap: 2,
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                p: 5,
                minHeight: 500,
              }}
            >
              <Image
                alt='logo'
                src='/logo.svg.png'
                width={300}
                height={150}
                className={styles.image}
              />
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-label'
                    sx={{ color: 'white' }}
                  >
                    Select Category
                  </InputLabel>
                  <Select
                    id='demo-simple-select'
                    value={formik.values.category}
                    label='Select Category'
                    onChange={(event: any) => {
                      handleChange(event);
                      formik.setFieldValue('category', event.target.value);
                    }}
                    sx={{ color: 'white' }}
                  >
                    <MenuItem value={'PowerBall'} color='white'>
                      PowerBall
                    </MenuItem>
                    <MenuItem value={'MegaMillion'} color='white'>
                      MegaMillion
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography
                  color='initial'
                  sx={{ fontSize: 15, fontWeight: 500, color: 'white' }}
                >
                  Enter Your Lottery Number
                </Typography>
                <Stack direction={'row'}>
                  {lotteryNumber.map((each, index) => {
                    return (
                      <TextField
                        {...getFieldProps(each?.name)}
                        inputRef={inputRefs[index]}
                        required
                        fullWidth
                        type='number'
                        id={`number${index}`}
                        sx={{
                          borderRadius: 2,
                          color: 'white',
                        }}
                        inputProps={{
                          className: 'custom-number-input',
                          style: { fontSize: 9, color: 'white' },
                        }}
                        onChange={(event: any) =>
                          handleInputChange(event, index)
                        }
                      />
                    );
                  })}
                </Stack>
              </Box>
              <Stack direction={'column'} sx={{ gap: 1 }}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    borderRadius: 2,
                    backgroundColor: '#302F7B',
                    textTransform: 'capitalize',
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Checking...' : 'Check Result'}
                </Button>
                <Button
                  fullWidth
                  variant='contained'
                  sx={{
                    borderRadius: 2,
                    backgroundColor: '#302F7B',
                    textTransform: 'capitalize',
                  }}
                >
                  Scan Ticket
                </Button>
              </Stack>
            </Stack>
            <Modal
              open={isResultVisible}
              onClose={closeModal}
              closeAfterTransition
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Fade in={isResultVisible}>
                <div
                  style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '350px',
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <IconButton
                    aria-label='close'
                    onClick={closeModal}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <LotteryResult
                    prizeHeadings={lotteryData?.prize?.headings || ''}
                    winningNumbers={lotteryData?.winningNumbers || []}
                    matchedNumbers={lotteryData?.userNumbers || []}
                  />
                </div>
              </Fade>
            </Modal>
          </Stack>
        </Form>
      </FormikProvider>
    </ThemeProvider>
  );
}
