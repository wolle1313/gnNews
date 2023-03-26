import { LayoutTypes } from 'redux/NewsLayoutSlice';

import { SvgIconComponent } from "@mui/icons-material";
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';

interface LayoutsType {
    order: LayoutTypes,
    icon: SvgIconComponent
}

 const layouts: LayoutsType[] = [
    {
        order: 'list',
        icon: ListIcon,
    }, {
        order: 'tiles',
        icon: GridViewIcon
    }
]

export default layouts