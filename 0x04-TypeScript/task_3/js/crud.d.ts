import { RowID, RowElement } from './interface';

export type insertRow = (row: RowElement) => number;
export type deleteRow = (rowId: RowID) => void
export type updateRow = (rowId: RowID, row: RowElement) => number;

export function insertRow(row: RowElement): number {
  throw new Error('Function not implemented.');
}


export function updateRow(newRowID: number, updatedRow: RowElement) {
  throw new Error('Function not implemented.');
}


export function deleteRow(newRowID: number) {
  throw new Error('Function not implemented.');
}
