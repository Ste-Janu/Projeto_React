import { useEffect, useState } from "react";
import { AeroportoModel } from "../Model/AeroportosModel";
import { deleteAeroporto, getTodosAeroportos } from "../Services/Aeroporto"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";

export function Aeroporto() {
  const [ aeroportos, setAeroportos ] = useState<AeroportoModel[]>([]);
  
  const loadData = async () => {
    const aeroportos: AeroportoModel[] = await getTodosAeroportos();
    setAeroportos(aeroportos);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  }

  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'id', 
      width: 200 
    },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 200,
    },
    {
      field: 'a',
      headerName: 'Ações',
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <a href={`/aeroportos/${params.row.id}`}>Ver</a>
            <button onClick={() => onClickDeleteAeroporto(params.row.id||0)}>Delete</button>
            <a href={`/aeroporto-alterar/${params.id}`}>Editar</a>
          </div>
        )
      }
    }
  ];


  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '10px'}}>
      <span>Aeroportos</span>
      <a href="/aeroporto-criar">Criar usuário</a>
      <Box sx={{ height: 400, width: '50%' }}>
        <DataGrid
          rows={aeroportos}
          columns={columns}
          getRowId={aeroporto => aeroporto.id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  )
}


// import axios from "axios"
// import { useEffect, useState } from "react";
// import { AeroportoModel } from "../Model/AeroportosModel";
// import { deleteAeroporto, getTodosAeroportos } from "../Services/Aeroporto"



// export function Aeroporto() {
//   const [ aeroportos, setAeroportos ] = useState<AeroportoModel[]>();

//   const loadData = async () => {
//     const aroporto: AeroportoModel[] = await getTodosAeroportos();
//     setAeroportos(aroporto);
//   }

//   useEffect(() => {
//     loadData();
//   }, []);

//   const onClickDeleteAeroporto = (id: number) => {
//     deleteAeroporto(id).then(() => loadData());
//   }

//   return (
//     <div >
//       <div className="aero">
//       <span >Aeroportos</span>
//       <a href="/aeroporto-criar">Criar aeroporto</a>
//       </div>
//       <div className="tabela">
//       <table>
//         <thead>
//           <tr>
//           <td>Código</td>
//           <td>Nome</td>
//           <td>Ações</td>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             aeroportos?.map(aeroporto => {
//               return (
//                 <tr>
//                   <td>{aeroporto.id}</td>
//                   <td>{aeroporto.nome}</td>
//                   <td className="acoes">
//                     <a href={`/aeroporto/${aeroporto.id}`}>Ver</a>
//                     <button onClick={() => onClickDeleteAeroporto(aeroporto.id||0)}>X</button>
//                     <a href={`/aeroporto-alterar/${aeroporto.id}`}>Editar</a>
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//       </div>
//     </div>
//   )
// }