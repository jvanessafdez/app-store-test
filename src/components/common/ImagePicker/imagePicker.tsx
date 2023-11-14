import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

interface DocumentPickerProps {
    files?: string[] | [];
    setFiles?: (file: string[] | []) => void;
    fileType?: "docs" | "images";
}

export const DocumentPickerComponent = async ({ fileType = "docs" }: DocumentPickerProps) => {
    const types = {
        images: [
            'image/jpg',
            'image/jpeg',
            'image/png'
        ]
    }

    // Opening Document Picker to select one file
    try {
        const res = await DocumentPicker.pick({
            type: types[fileType],
        });

        // Assuming that the user picks only one file, take the first one
        if (res && res[0]) {
            const file = res[0];
            return file.uri
        }
        
    } catch (err) {
        // Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
            console.log('Cancelado')
        } else {
            console.log('Error desconocido: ' + JSON.stringify(err))
            throw err;
        }
    }
};