
import {  Grid, TextField } from '@mui/material';
import { useForm} from "react-hook-form"
import {  useNavigate } from 'react-router-dom';
import testeImagem from '../../assets/imagem1.jpg'
import { RegisterButton, Target } from './styles';
export const HomeFigma = () =>{
    const { innerWidth: screenWidth } = window
    const methods = useForm()
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors }
      } = methods

    return (
        <Grid container collums={12} display={'flex'} alignItems={'center'}>
            <Grid item xs={6} sm={6} >
               <img style={{width:'100%',height:'100%'}} src={testeImagem} />
            </Grid>
            <Grid item sm={6} gap={2} padding={'5%'}   >
              <Grid item>
                <h1>Cadastre-se</h1>
                </Grid>
                <Grid item>
                <TextField label='Nome Completo' fullWidth></TextField>
                </Grid>
                <Grid item marginTop={'4%'}>
                <TextField label='Email' fullWidth></TextField>
                </Grid>
                <Grid marginTop={'4%'}>
                <TextField label='Senha' fullWidth></TextField>
                </Grid>
                <Grid item marginTop={'4%'}>
                  <RegisterButton fullWidth sx={{backgroundColor:'#CB6060',color:'white'}}>Cadastrar</RegisterButton >
                </Grid>
                <Grid item  display={'flex'} justifyContent={'center'} alignItems={'center'} gap={0.5}>
                  <h4>Já tem conta?</h4> <Target>Conecte-se</Target>
                </Grid>
            </Grid>
            
        </Grid>
    )
}