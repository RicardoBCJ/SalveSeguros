import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications';


export interface ShopProps {
    Id: string;
    Nome: string;
    Descricao: string;
    DescricaoCurta: string;
    Endereco: string;
    Latitude: number;
    Longitude: number;
    Foto: string;
    AvaliacaoUsuario: number;
    CodigoAssociacao: number;
    Email: string;
    Telefone1: number;
    Telefone2: number;
    Ativo: boolean;
  }