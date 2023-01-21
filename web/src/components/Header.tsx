import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import logoImage from '../assets/logo.svg'

export function Header() {  
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={ logoImage } alt="Logo Habits" />
      <Dialog.Root>
        {/* o trigger é o butão do radix */}
        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
        >
          <Plus size={20} className="text-violet-500 "/>
          New Habit
        </Dialog.Trigger>
        {/* o Portal coloca o modal na tela toda lá no index e for do header */}
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="fechar" />

            </Dialog.Close>
            conteudo do modal
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}