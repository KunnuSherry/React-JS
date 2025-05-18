import HelloWorld from "../components/helloworld";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ApiCallTest from "../components/apiTesting";

describe('api testing file', () => {
    it('check list of users', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([
                { id: 1, name: "Kunal Sharma" },
                { id: 2, name: "Zondo" }
            ])
        }));

        render(<ApiCallTest />);

        expect(screen.getByText('Loading data...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Kunal Sharma')).toBeInTheDocument();
            expect(screen.getByText('Zondo')).toBeInTheDocument();
        });

        expect(screen.queryByText('Loading data...')).not.toBeInTheDocument();
    });
});
