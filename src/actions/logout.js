// rrd imports
import { redirect } from 'react-router-dom';

// librarys
import { toast } from 'react-toastify';

// helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: 'userName',
  });
  toast.success('User deleted successfully');
  // return redirect
  return redirect('/');
}